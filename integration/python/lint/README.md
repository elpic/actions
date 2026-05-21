# integration/python/lint

Run the Python linter (ruff + mypy) via mise.

## Usage

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/python/lint@v1
```
