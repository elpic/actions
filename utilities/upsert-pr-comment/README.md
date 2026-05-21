# upsert-pr-comment

Post, update, or delete a PR comment identified by its leading text prefix.

Useful for bots that post reports (coverage, drift, lint results) and need to update the same comment on subsequent runs instead of creating duplicates.

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `token` | no | `${{ github.token }}` | GitHub token with PR comment write permission |
| `comment-prefix` | yes | — | Prefix to identify the comment (e.g. `"## Coverage Report"`) |
| `comment-body` | no | `""` | Full markdown body (required for `upsert`) |
| `action` | no | `upsert` | `upsert` or `delete` |

## Usage

### Post or update a comment

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

### Delete the comment

```yaml
- uses: elpic/actions/utilities/upsert-pr-comment@v1
  with:
    comment-prefix: "## Coverage Report"
    action: delete
```
