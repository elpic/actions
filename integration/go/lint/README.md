# Go Lint

Run the Go linter via mise.

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
  lint:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/lint@v1
```
### With just

```yaml
      - uses: elpic/actions/integration/go/lint@v1
        with:
          setup: just
          lint-task: lint
```
## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `setup` | no | `bash` | Tool setup method -- `bash`, `mise`, `node`, `just`, or `none` |
| `node-version` | no | `20` | Node.js version (used when `setup=node`) |
| `lint-task` | no | `lint` | Task to run |

## Notes

Your project needs a task named `lint` (or override via `lint-task`).
