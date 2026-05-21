# update-major-tag

After tagging a new release (e.g. `v1.2.3`), move the floating major (`v1`) and minor (`v1.2`) tags so users can pin with `@v1` and always get the latest v1.x release.

## Version scheme

| Release | After this action | Users get |
|---------|-------------------|-----------|
| `v1.0.0` | `v1` → v1.0.0, `v1.0` → v1.0.0 | `@v1` = v1.0.0 |
| `v1.1.0` | `v1` → v1.1.0, `v1.0` → v1.1.0 | `@v1` = v1.1.0 |
| `v2.0.0` | `v2` → v2.0.0, `v2.0` → v2.0.0 | `@v1` stays on v1.1.0 |

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `tag` | yes | — | The semver tag that was just created (e.g. `v1.2.3`) |
| `token` | no | `${{ github.token }}` | GitHub token with tag push permission |
| `update-minor` | no | `"true"` | Also update the minor tag (e.g. `v1.2`) |

## Usage

```yaml
steps:
  - run: |
      git tag v1.2.3
      git push origin v1.2.3

  - uses: elpic/actions/utilities/update-major-tag@v1
    with:
      tag: v1.2.3
```
