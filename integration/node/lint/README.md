# integration/node/lint

Run the Node.js linter (ESLint + Prettier) via mise.

## Usage

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/node/lint@v1
```
