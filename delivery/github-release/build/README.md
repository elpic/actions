# GitHub Release Build

Build the application and upload it as an artifact for the `publish` action.

## Usage

```yaml
name: Release
on:
  push:
    tags:
      - "v*"

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: elpic/actions/delivery/github-release/build@v1
        with:
          app-name: myapp
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | -- | Application name; used in artifact names |
| `build-task` | no | `build` | mise task that builds the application |
| `build-output` | no | `dist` | Directory containing the built output |
