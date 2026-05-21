# integration/node/test

Run tests with coverage comparison against the main branch.

Downloads the main branch's coverage artifact, runs the current PR's tests, calculates the delta, and posts a formatted report on the PR.

## Usage

### Default (mise)

```yaml
name: Integration
on:
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: elpic/actions/integration/node/test@v1
```

### With setup-node

```yaml
      - uses: elpic/actions/integration/node/test@v1
        with:
          setup: node
          node-version: '22'
          test-coverage-task: test:coverage
```

### With just

```yaml
      - uses: elpic/actions/integration/node/test@v1
        with:
          setup: just
          test-coverage-task: test:coverage
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `setup` | no | `mise` | Tool setup method -- `mise`, `node`, `just`, or `none` |
| `node-version` | no | `20` | Node.js version (used when `setup=node`) |
| `test-coverage-task` | no | `test:coverage` | Task that runs tests with coverage (produces `coverage/lcov.info`) |
| `test-task` | no | `test` | Task that runs tests without coverage |
| `timeout-minutes` | no | `8` | Step timeout |

## Notes

Your project needs a task named `test:coverage` that produces `coverage/lcov.info`. Coverage from the main branch is downloaded via `gh run download` and compared against the current PR.
