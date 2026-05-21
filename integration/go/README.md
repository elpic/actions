# integration/go

Composite actions for Go CI — test, lint, build, integration tests, and security.

Each action handles its own checkout and tooling setup. Compose them in your workflow with your own runner and triggers.

## Actions

| Action | Description |
|--------|-------------|
| [`test`](test/) | Run tests with coverage comparison against the main branch |
| [`lint`](lint/) | Run the linter |
| [`build`](build/) | Build the binary and upload as artifact |
| [`integration-tests`](integration-tests/) | Download artifact and run integration tests |
| [`security`](security/) | Run security scans |

## Usage

```yaml
name: Integration
on:
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

defaults:
  run:
    shell: bash

x-runner: &runner ubuntu-latest

jobs:
  test:
    runs-on: *runner
    timeout-minutes: 15
    steps:
      - uses: elpic/actions/integration/go/test@v1

  lint:
    runs-on: *runner
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/lint@v1

  build:
    runs-on: *runner
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/build@v1
        with:
          app-name: myapp

  integration:
    runs-on: *runner
    timeout-minutes: 15
    needs: [test, lint, build]
    steps:
      - uses: elpic/actions/integration/go/integration-tests@v1
        with:
          app-name: myapp

  security:
    runs-on: *runner
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/security@v1
```

Your project needs [mise](https://mise.jdx.dev) tasks that each action calls. Default task names are shown in each action's README.
