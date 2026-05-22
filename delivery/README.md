# delivery

Composite actions for release and publishing workflows.

## Registries

| Registry | Actions |
|----------|---------|
| [`pypi/`](pypi/) | [build](pypi/build/), [publish](pypi/publish/) — PyPI, GitHub Packages, or JFrog |

## Examples by registry

### PyPI (Trusted Publishing)

```yaml
name: Publish
on:
  push:
    branches: [main]

permissions:
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: elpic/actions/delivery/pypi/build@v1
        with:
          app-name: myapp

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    timeout-minutes: 10
    environment:
      name: pypi
      url: https://pypi.org/project/my-pypi-package/
    steps:
      - uses: elpic/actions/delivery/pypi/publish@v1
        with:
          app-name: myapp
          registry: pypi
```

### GitHub Packages

```yaml
  publish:
    needs: [build]
    runs-on: ubuntu-latest
    timeout-minutes: 10
    permissions:
      contents: read
      packages: write
    steps:
      - uses: elpic/actions/delivery/pypi/publish@v1
        with:
          app-name: myapp
          registry: github
```

### JFrog Artifactory

```yaml
  publish:
    needs: [build]
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/delivery/pypi/publish@v1
        with:
          app-name: myapp
          registry: jfrog
          jfrog-url: ${{ secrets.JFROG_URL }}
          jfrog-user: ${{ secrets.JFROG_USER }}
          jfrog-token: ${{ secrets.JFROG_TOKEN }}
```
