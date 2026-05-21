# integration

Composite actions for pull request CI — test, lint, build, and security checks.

Each action handles its own checkout and tooling. Compose them in your workflow with your own `runs-on` and triggers.

## Available

| Language | Actions |
|----------|---------|
| [`go/`](go/) | test, lint, build, integration-tests, security |
| [`python/`](python/) | test, lint, integration-tests, security |
