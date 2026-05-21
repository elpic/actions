# delivery/pypi/build

Build a Python package wheel and upload it as an artifact for the publish action.

## Usage

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/delivery/pypi/build@v1
        with:
          app-name: myapp
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | — | Application name |
| `build-task` | no | `build` | mise task that builds the wheel |
| `pypi-package-dir` | no | `dist` | Directory with built artifacts |
