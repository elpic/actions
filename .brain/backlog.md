# Backlog — elpic/actions

Prioritised using Impact/Effort matrix.

---

## P0 — Quick Wins (High Impact, Low Effort)

| Feature | Description |
|---------|-------------|
| **Dependabot for action.yml** | Dependabot only scans top-level workflows. Add `utilities/update-mise-action` or a manual bump PR to update `jdx/mise-action@v2` and `actions/setup-node@v4` across all 18 action files. |
| **Deprecation warnings** | Node.js 20 → 24 migration. All composite actions use `actions/checkout@v6` (already done). Check `jdx/mise-action@v2` for Node 24 compatibility. |
| **GitHub Pages status badge** | Add a badge to `README.md` linking to the Pages site once stable. |
| **Release workflow trigger** | Use `pull_request` trigger on release PR merge instead of `push: main` to avoid the PAT token issue. |

## P1 — Major Projects (High Impact, High Effort)

| Feature | Description |
|---------|-------------|
| **Node.js integration** | ✅ Done — `integration/node/{test,lint,build,integration-tests,security}` |
| **Docker integration** | `integration/docker/{build,lint,scan}` — Hadolint, Trivy, image build + artifact. |
| **Terraform integration** | `integration/terraform/{validate,plan,security}` — `terraform validate`, `fmt`, Checkov. |
| **npm delivery** | `delivery/npm/{build,publish}` — Symmetric with `delivery/pypi` for npm packages. |
| **Self-test workflow** | End-to-end test that validates each action.yml by running it with a minimal fixture repo. |
| **Setup action unification** | Extract the conditional setup logic (`mise`/`node`/`just`) into a shared `utilities/setup-tool` composite action to reduce duplication across all integration actions. |

## P2 — Fill-ins (Low Impact, Low Effort)

| Feature | Description |
|---------|-------------|
| **`utilities/auto-label`** | Auto-label PRs based on conventional commit type (`feat:`, `fix:`, `docs:`, etc.). |
| **`utilities/stale-issue`** | Close stale issues after 60 days of inactivity. |
| **PR template** | Add `.github/PULL_REQUEST_TEMPLATE.md` with checklist for conventional commits. |
| **Issue templates** | Add `.github/ISSUE_TEMPLATE/` for bug reports and feature requests. |
| **`utilities/setup-just`** | Dedicated action for installing `just` (currently inlined in each action). |

## P3 — Reconsider (Low Impact, High Effort)

| Feature | Description |
|---------|-------------|
| **Rust integration** | `integration/rust/{test,lint,build,security}` — cargo test, clippy, audit. Lower priority until there are Rust repos using these actions. |
| **Docker delivery** | `delivery/docker/publish` — Push to GHCR or Docker Hub via OIDC. |
| **Migration to node20 actions** | Bump `jdx/mise-action` from v2 and `actions/setup-node` from v4 if newer major versions are released. |
| **Full integration test suite** | Docker Compose-based test harness that runs each action against a real project and asserts outcomes. |

## Done

| Feature | PR / Commit |
|---------|-------------|
| Initial repo setup | `5a6426b` |
| Release workflow with release-please | PR #2, #4 |
| GitHub Pages deployment | PR #8, #9, #10 |
| Branch protection (squash merge, linear history) | Initial setup |
| Branch protection (require 1 approval) | Current PR |
| `actions/checkout@v4` → `@v6` | Current PR |
| Configurable setup (`mise` / `node` / `just`) | Current PR |
| Node.js integration actions | PR #11 |
