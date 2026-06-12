# Generate OCI Tags

Generate OCI-compliant Docker image tags — semver, commit SHA, branch, and latest —
formatted for `docker/build-push-action` or `docker tag` + `docker push`.

## Why

Every Docker workflow needs a consistent set of tags. The logic is always the same:
short SHA, sanitized branch name, semver components (major, major.minor, full), plus
`latest` for stable releases. This action standardises that logic so you don't
re-implement it in every workflow or inline it in every composite action.

## Usage

```yaml
- uses: elpic/actions/utilities/generate-oci-tags@v1
  id: tags
  with:
    registry: ghcr.io
    image: myapp
    version: v1.2.3

- uses: docker/build-push-action@v6
  with:
    tags: ${{ steps.tags.outputs.tags }}
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `registry` | ✅ | — | Container registry URL (e.g. `ghcr.io`, `docker.io`) |
| `image` | ✅ | — | Image name (e.g. `myapp`, `org/myapp`) |
| `version` | — | `""` | Semver version (e.g. `v1.2.3` or `1.2.3`) |
| `sha` | — | `${{ github.sha }}` | Full commit SHA |
| `sha-length` | — | `7` | Short SHA character length |
| `branch` | — | `${{ github.ref_name }}` | Git branch or tag name |
| `additional-tags` | — | `""` | Extra comma-separated tags |
| `include-latest` | — | `"true"` | Include `latest` tag (auto-skipped for pre-releases) |

## Outputs

| Output | Example | Description |
|--------|---------|-------------|
| `tags` | `ghcr.io/org/app:v1.2.3,ghcr.io/org/app:v1.2,...` | Full references — ready for `docker/build-push-action` |
| `tag-list` | `v1.2.3,v1.2,v1,abc1234,main,latest` | Tag values only |
| `sha-tag` | `abc1234` | Short commit SHA |
| `branch-tag` | `main` | Sanitized branch name |
| `version-tag` | `v1.2.3` | Full version (if `version` provided) |
| `version-major` | `v1` | Major version (if `version` provided) |
| `version-minor` | `v1.2` | Major.minor (if version has minor segment) |
| `latest-tag` | `latest` | Set when `include-latest` is true and version is not a pre-release |

## Tag generation rules

| Source | Example | Sanitization |
|--------|---------|-------------|
| SHA | `abc1234` | First N chars of commit SHA |
| Branch | `feature/my-branch` | Lowercase, `/` → `-`, `_` → `-` |
| Full version | `v1.2.3` | As provided |
| Major.minor | `v1.2` | Only if version has a patch segment |
| Major | `v1` | Always |
| Latest | `latest` | Skipped for pre-releases |
| Additional | as-is | No sanitization (whitespace trimmed) |

## Examples

### With docker/build-push-action

```yaml
- uses: elpic/actions/utilities/generate-oci-tags@v1
  id: tags
  with:
    registry: ghcr.io
    image: myapp
    version: v1.2.3

- uses: docker/build-push-action@v6
  with:
    tags: ${{ steps.tags.outputs.tags }}
```

Outputs `tags`:
```
ghcr.io/org/myapp:v1.2.3,ghcr.io/org/myapp:v1.2,ghcr.io/org/myapp:v1,ghcr.io/org/myapp:abc1234,ghcr.io/org/myapp:main,ghcr.io/org/myapp:latest
```

### Without version (SHA + branch only)

```yaml
- uses: elpic/actions/utilities/generate-oci-tags@v1
  id: tags
  with:
    registry: ghcr.io
    image: myapp
```

Output: `ghcr.io/org/myapp:abc1234,ghcr.io/org/myapp:main,ghcr.io/org/myapp:latest`

### Branch build (no latest)

```yaml
- uses: elpic/actions/utilities/generate-oci-tags@v1
  id: tags
  with:
    registry: ghcr.io
    image: myapp
    include-latest: false
```

### Pre-release version

```yaml
- uses: elpic/actions/utilities/generate-oci-tags@v1
  id: tags
  with:
    registry: ghcr.io
    image: myapp
    version: v2.0.0-rc.1
```

Output: semver tags but **no `latest`** tag (Docker convention).

### With docker tag + push

```yaml
- uses: elpic/actions/utilities/generate-oci-tags@v1
  id: tags
  with:
    registry: ghcr.io
    image: myapp
    version: v1.2.3

- run: |
    docker tag myapp:${{ steps.tags.outputs.sha-tag }}
    docker push ${{ steps.tags.outputs.tags }}
```

### Additional custom tags

```yaml
- uses: elpic/actions/utilities/generate-oci-tags@v1
  id: tags
  with:
    registry: ghcr.io
    image: myapp
    version: v1.2.3
    additional-tags: stable,production
```

## Migration from inline tag generation

If you currently inline tag logic like this:

```bash
TAGS="${REGISTRY}/${IMAGE}:${SHA},${REGISTRY}/${IMAGE}:${BRANCH},${REGISTRY}/${IMAGE}:latest"
```

Replace with:

```yaml
- uses: elpic/actions/utilities/generate-oci-tags@v1
  id: tags
  with:
    registry: ${{ inputs.registry }}
    image: ${{ inputs.app-name }}
```

Then use `${{ steps.tags.outputs.tags }}` — which also gives you semver support, branch sanitization, and pre-release handling for free.
