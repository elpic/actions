# integration/python/security

Run security scans (bandit + safety) via mise.

## Usage

```yaml
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/python/security@v1
```
