# integration/go/integration-tests

Download artifact and run Go integration tests.

## Usage

```yaml
name: CI
on:
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  integration-tests:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/integration-tests@v1
```
### With just

```yaml
      - uses: elpic/actions/integration/go/integration-tests@v1
        with:
          setup: just
          integration-task: test:integration
```
## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `setup` | no | `mise` | Tool setup method -- `mise`, `node`, `just`, or `none` |
| `node-version` | no | `20` | Node.js version (used when `setup=node`) |
| `integration-task` | no | `test:integration` | Task to run |

## Notes

Your project needs a task named `test:integration` (or override via `integration-task`).
