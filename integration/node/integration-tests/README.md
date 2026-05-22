# Node.js Integration Tests

Download the built artifact and run Node.js integration tests with services.

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
    needs: [build]
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
    steps:
      - uses: elpic/actions/integration/node/integration-tests@v1
        with:
          app-name: myapp
          env: |
            DATABASE_URL=postgres://postgres:test@localhost:5432/test
            REDIS_URL=redis://localhost:6379
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `setup` | no | `bash` | Tool setup method -- `bash`, `mise`, `node`, `just`, or `none` |
| `node-version` | no | `20` | Node.js version (used when `setup=node`) |
| `app-name` | yes | -- | Application name (matches the `build` action artifact) |
| `integration-task` | no | `test:integration` | Task to run |
| `env` | no | `""` | Environment variables, one `KEY=VALUE` per line |

## Notes

Your project needs a task named `test:integration` (or override via `integration-task`).

Use the `env` input to pass connection strings for services defined in the job's `services:` block.
