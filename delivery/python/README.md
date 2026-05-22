# delivery/python

Composite actions for releasing Python packages to PyPI, GitHub Packages, or JFrog Artifactory.

## Actions

| Action | Description |
|--------|-------------|
| [`build`](build/) | Build the package wheel and upload as artifact |
| [`publish`](publish/) | Publish the built artifact to PyPI, GitHub Packages, or JFrog |

## Usage

```yaml
name: Publish
on:
  push:
    branches: [main]
  workflow_dispatch:
    inputs:
      version:
        description: "Version to publish (e.g. 0.1.0)"
        required: false

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

defaults:
  run:
    shell: bash

x-runner: &runner ubuntu-latest

jobs:
  release-please:
    if: github.event_name != 'workflow_dispatch'
    runs-on: *runner
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
    if: always()
    needs: [release-please]
    runs-on: *runner
    timeout-minutes: 15
    steps:
      - uses: elpic/actions/delivery/python/build@v1
        with:
          app-name: myapp
          pypi-project-name: my-pypi-package

  publish:
    if: always()
    needs: [release-please, build]
    runs-on: *runner
    timeout-minutes: 10
    environment:
      name: pypi
      url: https://pypi.org/project/my-pypi-package/
    steps:
      - uses: elpic/actions/delivery/python/publish@v1
```

### Dev builds vs stable releases

| Scenario | `DEV_BUILD` | `RELEASE_VERSION` | Behavior |
|----------|-------------|-------------------|----------|
| Push to main, no release | `true` (run number) | — | Build dev pre-release (e.g. `v1.0.0-dev.42`) |
| Push to main, release created | — | — | Build stable version Release Please tagged |
| `workflow_dispatch` with version | — | user input | Build exact version specified |

Your `mise run build` script should handle these env vars:

```bash
if [ -n "$RELEASE_VERSION" ]; then
  hatch version "$RELEASE_VERSION"
elif [ -n "$DEV_BUILD" ]; then
  hatch version "$(hatch version).dev$GITHUB_RUN_NUMBER"
fi
hatch build
```

### Version bumps

| Commit type | Bump | Example |
|-------------|------|---------|
| `fix:` | patch | `v1.0.0` → `v1.0.1` |
| `feat:` | minor | `v1.0.0` → `v1.1.0` |
| `BREAKING CHANGE:` or `feat!:`, `fix!:` | major | `v1.0.0` → `v2.0.0` |

### Configure Trusted Publishing

1. Go to <https://pypi.org/manage/account/publishing/>
2. Click **Add a new publisher**
3. Fill in:
   - **PyPI Project Name**: your PyPI project
   - **Owner**: your GitHub org/user
   - **Repository name**: your repo name
   - **Workflow name**: `Publish`
   - **Environment name**: `pypi`
