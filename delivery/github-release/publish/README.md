# delivery/github-release/publish

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
  publish:
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

## Notes

This action expects a prior `build` job that uploaded an artifact named `${{ app-name }}-dist`.

The release is triggered by a tag push (e.g. `v1.2.3`). The `softprops/action-gh-release@v3` action generates release notes automatically and uploads all files from the build output directory as release assets.
