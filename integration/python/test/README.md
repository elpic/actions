# integration/python/test

Run Python tests with coverage comparison against the main branch. Posts a coverage report comment on the PR.

## Usage

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/python/test@v1
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `test-coverage-task` | no | `test:coverage` | mise task that runs pytest and writes `coverage.xml` |
| `test-task` | no | `test` | mise task that runs tests without coverage |
| `timeout-minutes` | no | `8` | Step timeout |
