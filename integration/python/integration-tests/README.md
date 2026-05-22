# Python Integration Tests

Run Python integration tests with services.

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
  integration:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    needs: [test, lint]
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
    steps:
      - uses: elpic/actions/integration/python/integration-tests@v1
        with:
          env: |
            DATABASE_URL=postgres://postgres:test@localhost:5432/test
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `setup` | no | `bash` | Tool setup method -- `bash`, `mise`, `node`, `just`, or `none` |
| `node-version` | no | `20` | Node.js version (used when `setup=node`) |
| `integration-task` | no | `test:integration` | Task to run |
| `env` | no | `""` | Environment variables, one `KEY=VALUE` per line |

## Notes

Your project needs a task named `test:integration` (or override via `integration-task`).

Use the `env` input to pass connection strings for services defined in the job's `services:` block.
