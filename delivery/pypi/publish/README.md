# delivery/pypi/publish

Publish a built Python package to PyPI using Trusted Publishing (OIDC).

Requires the `id-token: write` permission and a PyPI environment configured for Trusted Publishing.

## Usage

```yaml
jobs:
  publish:
    runs-on: ubuntu-latest
    needs: [build]
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
| `app-name` | yes | — | Application name |
| `pypi-package-dir` | no | `dist` | Directory with built artifacts |
