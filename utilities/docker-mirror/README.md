# Mirror Docker Image

Mirror a Docker image from a source registry (e.g. Docker Hub) to a mirror registry.

On first use the image is pulled from the source and pushed to the mirror. On subsequent
runs the image is pulled from the mirror and **retagged** under the original source name —
so `compose` files, `Dockerfile` `FROM` lines, and scripts can keep referencing the
original tag without hitting rate limits.

## Why

Docker Hub imposes rate limits on pulls. By mirroring images to the GitHub Container
Registry (GHCR) you avoid those limits entirely. Each runner pulls from GHCR instead
of Docker Hub — faster and without the 100 pull / 6h cap.

## Usage

```yaml
- uses: elpic/actions/utilities/docker-mirror@v1
  with:
    source: mockoon/cli:9.6.1
    github_token: ${{ secrets.GITHUB_TOKEN }}

# The image is now available under its original name:
- run: docker run mockoon/cli:9.6.1
```

The target image is auto-generated as `ghcr.io/<owner>/<sanitized-name>:<tag>`.
You can also specify it explicitly:

```yaml
- uses: elpic/actions/utilities/docker-mirror@v1
  with:
    source: postgres:16
    target: ghcr.io/myorg/infra/postgres:16
    github_token: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `source` | ✅ | — | Source image reference including tag (e.g. `mockoon/cli:9.6.1`) |
| `target` | — | Auto-generated | Target image in mirror registry |
| `github_token` | ✅ | — | GitHub token with `packages:write` permission |
| `dockerhub_username` | — | `""` | Docker Hub username (authenticated = 2× rate limit) |
| `dockerhub_token` | — | `""` | Docker Hub token or password |
| `force` | — | `false` | Always pull from source and re-push to mirror |

### Auto-generated target

When `target` is not provided it is computed as:

```
ghcr.io/<owner>/<source-name>:<tag>
```

where `<source-name>` has `/` replaced by `-`:

| Source | Auto-generated target |
|--------|----------------------|
| `mockoon/cli:9.6.1` | `ghcr.io/myorg/mockoon-cli:9.6.1` |
| `postgres:16` | `ghcr.io/myorg/postgres:16` |
| `nginx:latest` | `ghcr.io/myorg/nginx:latest` |

## Examples

### Basic — auto-generated target

```yaml
- uses: elpic/actions/utilities/docker-mirror@v1
  with:
    source: mockoon/cli:9.6.1
    github_token: ${{ secrets.GITHUB_TOKEN }}
```

### Explicit target

```yaml
- uses: elpic/actions/utilities/docker-mirror@v1
  with:
    source: postgres:16
    target: ghcr.io/myorg/infra/postgres:16
    github_token: ${{ secrets.GITHUB_TOKEN }}
```

### Force re-mirror (mutable tags)

Useful for tags like `:latest` that change over time:

```yaml
- uses: elpic/actions/utilities/docker-mirror@v1
  with:
    source: nginx:latest
    github_token: ${{ secrets.GITHUB_TOKEN }}
    force: true
```

### Authenticated Docker Hub pulls

Avoid anonymous rate limits and access private images:

```yaml
- uses: elpic/actions/utilities/docker-mirror@v1
  with:
    source: myorg/private-image:1.0
    github_token: ${{ secrets.GITHUB_TOKEN }}
    dockerhub_username: ${{ secrets.DH_USER }}
    dockerhub_token: ${{ secrets.DH_TOKEN }}
```

### Compose workflow

```yaml
name: CI
on: [push]

permissions:
  packages: write
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - name: Mirror service images
        uses: elpic/actions/utilities/docker-mirror@v1
        with:
          source: postgres:16
          github_token: ${{ secrets.GITHUB_TOKEN }}

      - name: Mirror app image
        uses: elpic/actions/utilities/docker-mirror@v1
        with:
          source: redis:7
          github_token: ${{ secrets.GITHUB_TOKEN }}

      # docker-compose.yml references postgres:16 and redis:7
      # — they're now available locally without hitting Docker Hub
      - run: docker compose up -d
      - run: npm test
```

## How it works

```
                    ┌──────────────────────────────┐
                    │  1. Login to GHCR             │
                    │     (required)                │
                    └──────────────────────────────┘
                    ┌──────────────────────────────┐
                    │  2. Login to Docker Hub       │
                    │     (only if credentials      │
                    │      are provided)            │
                    └──────────────────────────────┘
                    ┌──────────────────────────────┐
                    │  3. Resolve target            │
                    │     (auto-generate if not     │
                    │      explicitly set)          │
                    └──────────────────────────────┘
                              │
                    ┌──────────────────────────────┐
                    │  4. Try: docker pull $target  │
                    │     (continue-on-error)       │
                    └──────────────────────────────┘
                    │                          │
                SUCCESS                     FAILURE
                    │                    (or force=true)
                    ▼                          ▼
    ┌──────────────────────────┐   ┌──────────────────────────┐
    │ 5a. Already mirrored     │   │ 5b. Mirror from source   │
    │                          │   │                          │
    │ docker tag $target       │   │ docker pull $source      │
    │         $source          │   │ docker tag $source       │
    │                          │   │         $target          │
    │ Image ready as source    │   │ docker push $target      │
    │ via retag                │   │                          │
    └──────────────────────────┘   │ Image already IS source  │
                                  │ (just pulled from it)    │
                                  └──────────────────────────┘
                                        │
                                        ▼
                    ┌──────────────────────────────┐
                    │  ✅  Image available locally  │
                    │  as $source — compose files   │
                    │  and scripts work as-is       │
                    └──────────────────────────────┘
```

## Required permissions

```yaml
permissions:
  packages: write   # push to GHCR
  contents: read
```

## Notes

- Requires a GitHub-hosted runner (Docker is pre-installed on `ubuntu-latest`).
- The action does **not** clean up pulled images — they stay in the runner
  for subsequent steps. Runners are ephemeral so this is intentional.
- Only GHCR is supported as a mirror target. Source can be any registry.
- If both source and target pulls fail, the action fails with the source
  pull error.
