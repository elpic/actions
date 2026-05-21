# Actions

Reusable GitHub Actions and CI/CD workflow templates organised by category.

## Structure

```
actions/
├── integration/         CI — test, lint, build, security
├── delivery/            Release and publish packages
├── github/              GitHub-specific utilities
└── utilities/           General-purpose composite actions
```

## Categories

| Category | Description |
|----------|-------------|
| [`integration/`](integration/) | PR CI — compose test, lint, build, security jobs |
| [`delivery/`](delivery/) | Release and publish packages to registries |
| [`github/`](github/) | GitHub-specific composite actions |
| [`utilities/`](utilities/) | General-purpose composite actions |

## Usage

Each action is a composite action with `action.yml`. Reference it from your workflow's job steps:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/go/test@v1
```

You define `runs-on`, triggers, and job dependencies. Each action handles its own checkout and tooling setup internally.

## Versioning

| Tag | Meaning |
|-----|---------|
| `v1` | Latest v1.x release (floating) |
| `v1.2` | Latest v1.2.x release (floating) |
| `v1.2.3` | Immutable point-in-time release |

Use `utilities/update-major-tag` to move the floating tags after each release.
