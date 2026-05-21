# setup-mise

Checkout the repository and install [mise](https://mise.jdx.dev) in one step.

Every CI workflow needs to check out code and set up tools. This action combines `actions/checkout@v4` and `jdx/mise-action@v2` so you don't repeat the same two steps across all your workflows.

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `fetch-depth` | no | `0` | Number of commits to fetch (`0` = all history) |

## Usage

```yaml
steps:
  - uses: elpic/actions/utilities/setup-mise@v1
  - run: mise run test
```

Shallow checkout:

```yaml
- uses: elpic/actions/utilities/setup-mise@v1
  with:
    fetch-depth: 1
```
