# delivery/pages/publish

Build a static site and deploy it to GitHub Pages.

Works with any static site generator (Astro, Vite, TanStack Start, Hugo, Jekyll, Next.js static export, etc.).

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `build-command` | yes | — | Command to build the site (e.g. `bun run build`, `npm run build`) |
| `output-directory` | no | `dist` | Directory with built static files |
| `setup-command` | no | `""` | Command to run before build (e.g. `npm ci`, `bun install`) |
| `base-path` | no | `""` | Base path override. Defaults to `/{repo}` for project sites |

## Usage

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: elpic/actions/delivery/pages/publish@v1
        with:
          setup-command: npm ci
          build-command: npm run build
```

### With custom base path

```yaml
- uses: elpic/actions/delivery/pages/publish@v1
  with:
    setup-command: bun install --frozen-lockfile
    build-command: bun run build -- --base=${{ env.BASE_PATH }}/
    base-path: /my-site
    output-directory: dist/client
```
