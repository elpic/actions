# Actions

Reusable GitHub Actions and CI/CD composite workflow templates organised by category.

[![Release](https://img.shields.io/github/v/release/elpic/actions)](https://github.com/elpic/actions/releases)
[![Integration](https://github.com/elpic/actions/actions/workflows/integration.yml/badge.svg)](https://github.com/elpic/actions/actions/workflows/integration.yml)

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
