# github/blueprint-check

Composite action that runs `blueprint check` on a PR and posts a comment if drift is detected. The comment is automatically removed when drift is resolved.

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
| `template` | yes | Template path or `@github:` shorthand (e.g. `.` or `@github:elpic/templates@main:containers/python`) |
| `against` | yes | Directory or file to check against (e.g. `.` or `src/`) |
