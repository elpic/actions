# delivery/python/build

Build a Python package wheel and upload it as an artifact for the `publish` action.

## Usage

```yaml
name: Publish
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: elpic/actions/delivery/python/build@v1
        with:
          app-name: myapp
          pypi-package-dir: dist
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | -- | Application name (used in artifact name) |
| `build-task` | no | `build` | mise task that builds the wheel |
| `pypi-package-dir` | no | `dist` | Directory with built artifacts |

## Notes

The build task receives `DEV_BUILD` and `RELEASE_VERSION` environment variables.
