# delivery

Composite actions for release and publishing workflows.

## Registries

| Registry | Actions |
|----------|---------|
| [`pypi/`](pypi/) | [build](pypi/build/), [publish](pypi/publish/) |

## Full workflow example

```yaml
name: Publish
on:
  push:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}

defaults:
  run:
    shell: bash

jobs:
  release-please:
    if: github.event_name != 'workflow_dispatch'
    runs-on: ubuntu-latest
    timeout-minutes: 10
    outputs:
      release_created: ${{ steps.release.outputs.release_created }}
    steps:
      - uses: googleapis/release-please-action@v4
        id: release
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          config-file: release-please-config.json

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
    permissions:
      id-token: write
    steps:
      - uses: elpic/actions/delivery/pypi/publish@v1
        with:
          app-name: myapp
```
