# integration/node/security

Run security scans (npm audit, etc.) via mise.

## Usage

```yaml
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/node/security@v1
```
