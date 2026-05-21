# integration/python

Composite actions for Python CI — test, lint, integration tests, and security.

Each action handles its own checkout and tooling setup. Compose them in your workflow with your own runner and triggers.

## Actions

| Action | Description |
|--------|-------------|
| [`test`](test/) | Run tests with coverage comparison against the main branch |
| [`lint`](lint/) | Run the linter |
| [`integration-tests`](integration-tests/) | Run integration tests |
| [`security`](security/) | Run security scans |

## Usage

```yaml
name: CI
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
      - uses: elpic/actions/integration/python/test@v1

  lint:
    runs-on: *runner
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/python/lint@v1

  integration:
    runs-on: *runner
    timeout-minutes: 15
    needs: [test, lint]
    steps:
      - uses: elpic/actions/integration/python/integration-tests@v1

  security:
    runs-on: *runner
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/python/security@v1
```

Your project needs [mise](https://mise.jdx.dev) tasks that each action calls. Default task names are shown in each action's README.
