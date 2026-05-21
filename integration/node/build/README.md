# integration/node/build

Build the Node.js project and upload the output as an artifact for downstream jobs.

## Usage

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: elpic/actions/integration/node/build@v1
        with:
          app-name: myapp
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | — | Artifact name |
| `build-task` | no | `build` | mise task that builds the project |
| `output-path` | no | `dist/` | Glob pattern for built output files |
