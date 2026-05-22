# Delivery

Composite actions for release and publishing workflows.

## Registries

| Registry | Actions |
|----------|---------|
| [`docker/`](docker/) | [publish](docker/publish/) — Build and push Docker images |
| [`github-release/`](github-release/) | [build](github-release/build/), [publish](github-release/publish/) — Build and publish GitHub Releases |
| [`pages/`](pages/) | [publish](pages/publish/) — Build and deploy to GitHub Pages |
| [`python/`](python/) | [build](python/build/), [publish](python/publish/) — PyPI, GitHub Packages, or JFrog |

### GitHub Release (tag push)

```yaml
name: Release
on:
  push:
    tags:
      - "v*"

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: elpic/actions/delivery/github-release/build@v1
        with:
          app-name: myapp

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/delivery/github-release/publish@v1
        with:
          app-name: myapp
```

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
      - uses: elpic/actions/delivery/python/build@v1
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
      - uses: elpic/actions/delivery/python/publish@v1
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
      - uses: elpic/actions/delivery/python/publish@v1
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
      - uses: elpic/actions/delivery/python/publish@v1
        with:
          app-name: myapp
          registry: jfrog
          jfrog-url: ${{ secrets.JFROG_URL }}
          jfrog-user: ${{ secrets.JFROG_USER }}
          jfrog-token: ${{ secrets.JFROG_TOKEN }}
```
