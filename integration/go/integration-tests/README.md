# integration/go/integration-tests

Download the built artifact and run integration tests.

## Usage

```yaml
jobs:
  integration:
    runs-on: ubuntu-latest
    needs: [build]
    steps:
      - uses: elpic/actions/integration/go/integration-tests@v1
        with:
          app-name: myapp
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `app-name` | yes | — | Binary artifact name |
| `integration-task` | no | `test:integration` | mise task for integration tests |
