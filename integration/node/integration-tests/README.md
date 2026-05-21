# integration/node/integration-tests

Download the built artifact and run integration tests.

## Usage

```yaml
jobs:
  integration:
    runs-on: ubuntu-latest
    needs: [build]
    steps:
      - uses: elpic/actions/integration/node/integration-tests@v1
        with:
          app-name: myapp
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | — | Artifact name |
| `integration-task` | no | `test:integration` | mise task for integration tests |
