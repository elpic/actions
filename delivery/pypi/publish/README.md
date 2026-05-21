# delivery/pypi/publish

Publish a built Python package to PyPI using Trusted Publishing (OIDC).

## Usage

```yaml
name: Publish
on:
  push:
    branches: [main]

permissions:
  id-token: write

jobs:
  publish:
    runs-on: ubuntu-latest
    needs: [build]
    timeout-minutes: 10
    environment:
      name: pypi
      url: https://pypi.org/project/my-pypi-package/
    steps:
      - uses: elpic/actions/delivery/pypi/publish@v1
        with:
          app-name: myapp
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | -- | Application name |
| `pypi-package-dir` | no | `dist` | Directory with built artifacts |
