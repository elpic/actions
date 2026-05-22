# delivery/docker/publish

Build, tag, and push a Docker image to a container registry.

Supports Docker Hub, GitHub Container Registry (GHCR), AWS ECR, and any other OCI-compatible registry.

## Authentication

Authentication must be handled **before** calling this action, since it varies by registry:

**Docker Hub:**
```yaml
- uses: docker/login-action@v3
  with:
    username: ${{ secrets.DOCKER_USERNAME }}
    password: ${{ secrets.DOCKER_PASSWORD }}
```

**GHCR:**
```yaml
- uses: docker/login-action@v3
  with:
    registry: ghcr.io
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```

**AWS ECR:**
```yaml
- uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: ${{ secrets.AWS_ROLE }}
- uses: aws-actions/amazon-ecr-login@v2
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | — | Application name; used in image name |
| `registry` | yes | — | Container registry URL |
| `dockerfile` | no | `Dockerfile` | Path to Dockerfile |
| `build-context` | no | `.` | Docker build context |
| `build-task` | no | `""` | mise task for pre-build steps (e.g. compile assets) |
| `additional-tags` | no | `""` | Comma-separated extra tags |

## Tag scheme

The action generates these tags automatically:
- `{registry}/{app-name}:{sha}` — immutable commit tag
- `{registry}/{app-name}:{branch}` — branch name (e.g. main)
- `{registry}/{app-name}:latest` — latest
- `{registry}/{app-name}:{custom}` — any additional tags passed

## Usage

```yaml
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - uses: elpic/actions/delivery/docker/publish@v1
        with:
          app-name: myapp
          registry: ghcr.io/myorg
          additional-tags: v1.0.0,stable
```
