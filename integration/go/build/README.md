# integration/go/build

Build the Go binary and upload it as an artifact for downstream jobs.

## Usage

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/go/build@v1
        with:
          app-name: myapp
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | — | Binary artifact name |
| `build-task` | no | `build` | mise task that builds the binary |
