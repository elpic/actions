# Update Major Tag

After tagging a release (`v1.2.3`), move the floating `v1` and `v1.2` tags.

## Version scheme

| Release | After | Users get |
|---------|-------|-----------|
| `v1.0.0` | `v1` -> v1.0.0, `v1.0` -> v1.0.0 | `@v1` = v1.0.0 |
| `v1.1.0` | `v1` -> v1.1.0, `v1.0` -> v1.1.0 | `@v1` = v1.1.0 |
| `v2.0.0` | `v2` -> v2.0.0, `v2.0` -> v2.0.0 | `@v1` stays on v1.1.0 |

## Usage

```yaml
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 0
      - run: |
          git tag v1.2.3
          git push origin v1.2.3
      - uses: elpic/actions/utilities/update-major-tag@v1
        with:
          tag: v1.2.3
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `tag` | yes | -- | Semver tag (e.g. `v1.2.3`) |
| `token` | no | `${{ github.token }}` | Token with tag push permission |
| `update-minor` | no | `true` | Also update minor tag (`v1.2`) |
