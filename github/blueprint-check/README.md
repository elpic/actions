# Blueprint Check

Run `blueprint check` on a PR. Posts a drift comment when detected, removes it when resolved.

## Usage

```yaml
name: Blueprint Check
on:
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  check:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: elpic/actions/github/blueprint-check@v1
        with:
          blueprint-file: setup.bp
          template: .
          against: .
```

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `blueprint-file` | yes | Path to the `.bp` file (e.g. `setup.bp`) |
| `template` | yes | Template path or `@github:` shorthand |
| `against` | yes | Directory or file to check against |
