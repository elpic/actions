# integration/node/integration-tests

Download artifact and run Node.js integration tests.

## Usage

```yaml
name: Integration
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
      - uses: elpic/actions/integration/node/integration-tests@v1
```
### With just

```yaml
      - uses: elpic/actions/integration/node/integration-tests@v1
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
