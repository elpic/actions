# Tauri Build

Runs the full Tauri build pipeline: `npm ci`, type check, frontend build, `cargo check`, `cargo clippy`, and `cargo test`.

## Inputs

| Name | Required | Default | Description |
|------|----------|---------|-------------|
| `project-directory` | no | `"."` | Directory containing the Tauri project (relative to workspace) |

## Usage

```yaml
- uses: elpic/actions/integration/tauri/build@v1
  with:
    project-directory: my-tauri-app
```
