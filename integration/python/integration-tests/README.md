# integration/python/integration-tests

Run integration tests via mise.

## Usage

```yaml
jobs:
  integration:
    runs-on: ubuntu-latest
    needs: [test, lint]
    steps:
      - uses: elpic/actions/integration/python/integration-tests@v1
```
