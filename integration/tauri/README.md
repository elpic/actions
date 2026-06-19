# Tauri

Composite actions for [Tauri](https://v2.tauri.app) v2 CI — setup and build.

Each action handles its own tooling setup. Compose them in your workflow with your own runner and triggers.

## Actions

| Action | Description |
|--------|-------------|
| [`setup`](setup/) | Install Node.js, Rust, and Tauri system dependencies |
| [`build`](build/) | Frontend build, type check, cargo check, clippy, and test |

## Usage

```yaml
name: CI
on:
  pull_request:
    branches: [main]

jobs:
  build:
    name: Build
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest, macos-latest]
    runs-on: ${{ matrix.os }}
    timeout-minutes: 15

    steps:
      - uses: actions/checkout@v4

      - name: Setup
        uses: elpic/actions/integration/tauri/setup@v1
        with:
          node-version: "22"
          rust-version: stable

      - name: Build
        uses: elpic/actions/integration/tauri/build@v1

      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: myapp-${{ matrix.os }}
          path: src-tauri/target/release
          if-no-files-found: ignore
```

Your project needs a valid Tauri v2 project structure. The `setup` action installs Node.js, Rust, and Linux system dependencies. The `build` action runs the full build pipeline (npm ci, type check, frontend build, cargo check/clippy/test).
