# integration

Composite actions for pull request checks — test, lint, build, integration tests, and security.

Each action handles its own checkout and tooling. Compose them in your workflow with your own `runs-on`, services, and job dependencies.

## Languages

| Language | Actions |
|----------|---------|
| [`go/`](go/) | test, lint, build, integration-tests, security |
| [`node/`](node/) | test, lint, build, integration-tests, security |
| [`python/`](python/) | test, lint, integration-tests, security |

## Full workflow example

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
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
      redis:
        image: redis:7
        ports:
          - 6379:6379
    steps:
      - uses: elpic/actions/integration/go/integration-tests@v1
        with:
          app-name: myapp
          env: |
            DATABASE_URL=postgres://postgres:test@localhost:5432/test?sslmode=disable
            REDIS_URL=redis://localhost:6379

  security:
    runs-on: *runner
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/security@v1
```

## Examples by language

### Go

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/go/test@v1
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/go/lint@v1
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/go/build@v1
        with:
          app-name: myapp
  integration:
    runs-on: ubuntu-latest
    needs: [test, lint, build]
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
    steps:
      - uses: elpic/actions/integration/go/integration-tests@v1
        with:
          app-name: myapp
          env: |
            DATABASE_URL=postgres://postgres:test@localhost:5432/test?sslmode=disable
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/go/security@v1
```

### Python

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/python/test@v1
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/python/lint@v1
  integration:
    runs-on: ubuntu-latest
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
            DATABASE_URL=postgres://postgres:test@localhost:5432/test?sslmode=disable
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/python/security@v1
```

### Node.js

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/node/test@v1
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/node/lint@v1
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/node/build@v1
        with:
          app-name: myapp
  integration:
    runs-on: ubuntu-latest
    needs: [test, lint, build]
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
            DATABASE_URL=postgres://postgres:test@localhost:5432/test?sslmode=disable
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/node/security@v1
```

## Using setup-node instead of mise

```yaml
- uses: elpic/actions/integration/node/lint@v1
  with:
    setup: node
    node-version: '22'
    lint-task: eslint
```

## Services

Integration tests often need databases or caches. Use GitHub's [`services`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idservices) to spin up dependencies:

| Service | Image | Port |
|---------|-------|------|
| PostgreSQL | `postgres:16` | 5432 |
| Redis | `redis:7` | 6379 |
| MySQL | `mysql:8` | 3306 |
| LocalStack | `localstack/localstack` | 4566 |

Each integration action supports an `env` input to pass connection strings:

```yaml
      - uses: elpic/actions/integration/go/integration-tests@v1
        with:
          app-name: myapp
          env: |
            DATABASE_URL=postgres://postgres:test@localhost:5432/test?sslmode=disable
            REDIS_URL=redis://localhost:6379
```

Each line is exported as an environment variable before the test command runs.
