# integration/python/security

Run Python security scans (bandit + safety) via mise.

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
  security:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/python/security@v1
```
### With just

```yaml
      - uses: elpic/actions/integration/python/security@v1
        with:
          setup: just
          security-task: security
```
## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `setup` | no | `mise` | Tool setup method -- `mise`, `node`, `just`, or `none` |
| `node-version` | no | `20` | Node.js version (used when `setup=node`) |
| `security-task` | no | `security` | Task to run |

## Notes

Your project needs a task named `security` (or override via `security-task`).
