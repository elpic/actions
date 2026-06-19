# Tauri Setup

Installs Node.js, Rust, and Tauri system dependencies for CI builds.

## Inputs

| Name | Required | Description |
|------|----------|-------------|
| `node-version` | yes | Node.js version (e.g. `"22"`) |
| `rust-version` | yes | Rust toolchain (e.g. `stable`) |

## Usage

```yaml
- uses: elpic/actions/integration/tauri/setup@v1
  with:
    node-version: "22"
    rust-version: stable
```
