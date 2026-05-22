# delivery/pypi/publish

Publish a built Python package to PyPI, GitHub Packages, or JFrog Artifactory.

## Usage

### PyPI (default)

```yaml
- uses: elpic/actions/delivery/pypi/publish@v1
  with:
    app-name: myapp
    registry: pypi
```

Requires a `pypi` environment with [Trusted Publishing](https://docs.pypi.org/trusted-publishers/) configured on PyPI.

### GitHub Packages

```yaml
- uses: elpic/actions/delivery/pypi/publish@v1
  with:
    app-name: myapp
    registry: github
```

Requires `packages: write` permission on the `GITHUB_TOKEN`.

### JFrog Artifactory

```yaml
- uses: elpic/actions/delivery/pypi/publish@v1
  with:
    app-name: myapp
    registry: jfrog
    jfrog-url: ${{ secrets.JFROG_URL }}
    jfrog-user: ${{ secrets.JFROG_USER }}
    jfrog-token: ${{ secrets.JFROG_TOKEN }}
```

Secrets must be configured in your repository or organisation.
