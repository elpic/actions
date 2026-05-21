# utilities/upsert-pr-comment

Post, update, or delete a PR comment matched by prefix.

## Usage

### Post or update

```yaml
      - uses: elpic/actions/utilities/upsert-pr-comment@v1
        with:
          comment-prefix: "## Coverage Report"
          comment-body: |
            ## Coverage Report
            | Metric | Value |
            |--------|-------|
            | **This PR** | 85.3% |
```

### Delete

```yaml
      - uses: elpic/actions/utilities/upsert-pr-comment@v1
        with:
          comment-prefix: "## Coverage Report"
          action: delete
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `comment-prefix` | yes | -- | Prefix to match the comment |
| `comment-body` | no | `""` | Markdown body (required for upsert) |
| `action` | no | `upsert` | `upsert` or `delete` |
| `token` | no | `${{ github.token }}` | Token with PR comment permission |
