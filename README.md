# Actions

Reusable GitHub Actions, integration and delivery composite workflow templates organised by category.

[![Release](https://img.shields.io/github/v/release/elpic/actions)](https://github.com/elpic/actions/releases)
[![Integration](https://github.com/elpic/actions/actions/workflows/integration.yml/badge.svg)](https://github.com/elpic/actions/actions/workflows/integration.yml)

## Quick start

```yaml
name: Integration
on:
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

defaults:
  run:
    shell: bash

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: elpic/actions/integration/go/test@v1

  lint:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/lint@v1

  build:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/build@v1
        with:
          app-name: myapp

  integration:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    needs: [test, lint, build]
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
    steps:
      - uses: elpic/actions/integration/go/integration-tests@v1
        with:
          app-name: myapp

  security:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/integration/go/security@v1
```

> Each action handles its own checkout and tooling setup. You define `runs-on`, services, and job dependencies.

## Categories

| Category | Description | Actions |
|----------|-------------|---------|
| [`integration/`](integration/) | PR checks — test, lint, build, security | [Go](integration/go/), [Node](integration/node/), [Python](integration/python/) |
| [`delivery/`](delivery/) | Release and publish packages | [Docker](delivery/docker/), [GitHub Release](delivery/github-release/), [Pages](delivery/pages/), [Python](delivery/python/) |
| [`github/`](github/) | GitHub-specific utilities | [blueprint-check](github/blueprint-check/) |
| [`utilities/`](utilities/) | General-purpose composites | [setup-mise](utilities/setup-mise/), [update-major-tag](utilities/update-major-tag/), [upsert-pr-comment](utilities/upsert-pr-comment/) |

## Full list of actions

| Path | Description |
|------|-------------|
| `integration/go/test` | Go tests with coverage comparison vs main |
| `integration/go/lint` | Go linter |
| `integration/go/build` | Go build + artifact upload |
| `integration/go/integration-tests` | Download artifact + run Go integration tests |
| `integration/go/security` | Go security scans |
| `integration/node/test` | Node.js tests with coverage comparison vs main |
| `integration/node/lint` | ESLint + Prettier |
| `integration/node/build` | Node.js build + artifact upload |
| `integration/node/integration-tests` | Download artifact + run Node integration tests |
| `integration/node/security` | npm audit |
| `integration/python/test` | Python tests with coverage comparison vs main |
| `integration/python/lint` | ruff + mypy |
| `integration/python/integration-tests` | Python integration tests |
| `integration/python/security` | bandit + safety |
| `delivery/github-release/build` | Build app and upload artifact for GitHub Release |
| `delivery/github-release/publish` | Download artifact and create a GitHub Release |
| `delivery/docker/publish` | Build and push Docker images to a container registry |
| `delivery/pages/publish` | Build a static site and deploy to GitHub Pages |
| `delivery/python/build` | Build Python wheel + upload artifact |
| `delivery/python/publish` | Publish to PyPI, GitHub Packages, or JFrog |
| `github/blueprint-check` | PR drift detection for blueprint templates |
| `utilities/setup-mise` | Checkout + mise install in one step |
| `utilities/update-major-tag` | Move floating tags after release |
| `utilities/upsert-pr-comment` | Post/update/delete PR comments |

## Configurable setup

Each integration action supports three tool runners via the `setup` input:

| `setup` value | Effect |
|--------------|--------|
| `mise` (default) | `jdx/mise-action@v2` + `mise run <task>` |
| `node` | `actions/setup-node@v4` + `npm run <task>` |
| `just` | Install `just` + `just <task>` |
| `none` | No tool setup |

```yaml
- uses: elpic/actions/integration/node/test@v1
  with:
    setup: node
    node-version: '22'
    test-coverage-task: vitest:coverage
```

## Versioning

| Tag | Meaning |
|-----|---------|
| `v1` | Latest v1.x release (floating) |
| `v1.2` | Latest v1.2.x release (floating) |
| `v1.2.3` | Immutable point-in-time release |

Use `utilities/update-major-tag` to move the floating tags after each release.
