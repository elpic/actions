# integration/node/test

Run Node.js tests with coverage comparison against the main branch. Posts a coverage report comment on the PR.

Expects your project to have a mise task (default `test:coverage`) that runs vitest with lcov coverage output to `coverage/lcov.info`.

## Usage

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/node/test@v1
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `test-coverage-task` | no | `test:coverage` | mise task that runs vitest with coverage and writes `coverage/lcov.info` |
| `test-task` | no | `test` | mise task that runs tests without coverage |
| `timeout-minutes` | no | `8` | Step timeout |
