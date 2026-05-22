# GitHub Release Publish

Download the build artifact and create a GitHub Release with it.

## Usage

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

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | -- | Application name; used to download the correct artifact |
| `build-output` | no | `dist` | Directory where the artifact was extracted |
