# integration/go/test

Run Go tests with coverage comparison against the main branch. Posts a coverage report comment on the PR.

## Usage

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/go/test@v1
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `test-coverage-task` | no | `test:coverage` | mise task that runs tests and writes `coverage.out` |
| `timeout-minutes` | no | `8` | Step timeout |
