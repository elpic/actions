# integration/go/build

Build the Go binary and upload it as an artifact.

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
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/build@v1
```
### With just

```yaml
      - uses: elpic/actions/integration/go/build@v1
        with:
          setup: just
          build-task: build
```
## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `setup` | no | `mise` | Tool setup method -- `mise`, `node`, `just`, or `none` |
| `node-version` | no | `20` | Node.js version (used when `setup=node`) |
| `build-task` | no | `build` | Task to run |

## Notes

Your project needs a task named `build` (or override via `build-task`).
