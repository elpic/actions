# Setup Mise

Checkout + [mise](https://mise.jdx.dev) install in one step.

Combines `actions/checkout@v6` and `jdx/mise-action@v2` so you don't repeat the same two steps across all workflows.

## Usage

```yaml
steps:
  - uses: elpic/actions/utilities/setup-mise@v1
  - run: mise run test
```

### Shallow checkout

```yaml
- uses: elpic/actions/utilities/setup-mise@v1
  with:
    fetch-depth: 1
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `fetch-depth` | no | `0` | Commits to fetch (`0` = all history) |
