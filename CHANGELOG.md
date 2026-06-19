# Changelog

## [2.5.0](https://github.com/elpic/actions/compare/v2.4.0...v2.5.0) (2026-06-19)


### Features

* add Tauri composite actions (setup + build) and integration tests ([9285570](https://github.com/elpic/actions/commit/9285570b1b58976b2a3fd6188648c1988e0266df))

## [2.4.0](https://github.com/elpic/actions/compare/v2.3.0...v2.4.0) (2026-06-16)


### Features

* run tests only when associated files change ([#44](https://github.com/elpic/actions/issues/44)) ([4ae7f2a](https://github.com/elpic/actions/commit/4ae7f2ab2b2cb8168c77d1d7a62cd7d320244959))

## [2.3.0](https://github.com/elpic/actions/compare/v2.2.0...v2.3.0) (2026-06-15)


### Features

* run tests only when associated files change ([fe3481c](https://github.com/elpic/actions/commit/fe3481cda699a8af9fbccdaaf20aad5ca3929118))

## [2.2.0](https://github.com/elpic/actions/compare/v2.1.0...v2.2.0) (2026-06-12)


### Features

* add generate-oci-tags utility action ([3c0eb90](https://github.com/elpic/actions/commit/3c0eb907cadf23f18984446fc098009677eb02f8))

## [2.1.0](https://github.com/elpic/actions/compare/v2.0.0...v2.1.0) (2026-06-12)


### Features

* add docker-mirror utility action ([7f48e83](https://github.com/elpic/actions/commit/7f48e83ec4ad0b8484140ab9e5b3c33007315b6c))

## [2.0.0](https://github.com/elpic/actions/compare/v1.5.3...v2.0.0) (2026-05-23)


### ⚠ BREAKING CHANGES

* Action path changes from github/blueprint-check to github/drift-check.

### Bug Fixes

* rename github/blueprint-check to github/drift-check ([331eb89](https://github.com/elpic/actions/commit/331eb89a5309b6ed70999f7cd200ea333376c157))

## [1.5.3](https://github.com/elpic/actions/compare/v1.5.2...v1.5.3) (2026-05-23)


### Bug Fixes

* add opened trigger for auto-merge workflow ([bebed17](https://github.com/elpic/actions/commit/bebed1788d7b3fa788ec363863195aa55fa6bff2))

## [1.5.2](https://github.com/elpic/actions/compare/v1.5.1...v1.5.2) (2026-05-23)


### Bug Fixes

* bash|*) wildcard catches all setup values, making mise/node/just unreachable ([6bfb17e](https://github.com/elpic/actions/commit/6bfb17edf11f0b97f564e7060403031d9bf0349f))

## [1.5.1](https://github.com/elpic/actions/compare/v1.5.0...v1.5.1) (2026-05-23)


### Bug Fixes

* add --repo flag to gh pr merge in auto-merge workflow ([4aaf3a7](https://github.com/elpic/actions/commit/4aaf3a70e42e2ab101ccc7ecb87d1f9889dd8a6f))
* remove invalid timeout-minutes and clean duplicated case in go/test ([5c1ed19](https://github.com/elpic/actions/commit/5c1ed190d310cea4ebf9c410b57152c8acfc98cf))

## [1.5.0](https://github.com/elpic/actions/compare/v1.4.0...v1.5.0) (2026-05-23)


### Features

* add auto-merge workflow for release-please PRs ([#25](https://github.com/elpic/actions/issues/25)) ([512ee04](https://github.com/elpic/actions/commit/512ee04c08af9d3458cdc7e0b3b672f65600c302))

## [1.4.0](https://github.com/elpic/actions/compare/v1.3.0...v1.4.0) (2026-05-22)


### Features

* extract just installation into utilities/setup-just ([37fca26](https://github.com/elpic/actions/commit/37fca264c3f0a0ac0472cdbfe6b59549c110c9eb))

## [1.3.0](https://github.com/elpic/actions/compare/v1.2.0...v1.3.0) (2026-05-22)


### Features

* add delivery/github-release actions, change default setup to bash ([32c5d23](https://github.com/elpic/actions/commit/32c5d2374dcf2349d4be58c4aa0a189d203fe08b))

## [1.2.0](https://github.com/elpic/actions/compare/v1.1.0...v1.2.0) (2026-05-22)


### Features

* extend delivery/python/publish with registry input (pypi, github, jfrog) ([a0be7c6](https://github.com/elpic/actions/commit/a0be7c69ea20316f3297733477cf2508d86394ff))

## [1.1.0](https://github.com/elpic/actions/compare/v1.0.0...v1.1.0) (2026-05-21)


### Features

* configurable tool setup (mise/node/just), bump checkout to v6, add backlog ([13fb8ca](https://github.com/elpic/actions/commit/13fb8cac4a8c690b882e3e80ee840675a9a97963))

## 1.0.0 (2026-05-21)


### Features

* add Node.js integration actions (test, lint, build, integration-tests, security) ([49aa2f4](https://github.com/elpic/actions/commit/49aa2f41ed27acdf2d3aa151fa91ecdcb3709b21))
* add status badges and initial release metadata ([f3f32bd](https://github.com/elpic/actions/commit/f3f32bd9a07ef7dcf998b1d2e8604874cd459d88))


### Bug Fixes

* configure release-please properly and add missing config files ([812b3da](https://github.com/elpic/actions/commit/812b3dab7052cd3176e7c687b78c8a4f61149af6))
* use PAT token for release-please to allow PR creation ([aa0e63b](https://github.com/elpic/actions/commit/aa0e63b7205fb91675516b468957b3180adda415))

## 1.0.0 (2026-05-21)


### Features

* add status badges and initial release metadata ([f3f32bd](https://github.com/elpic/actions/commit/f3f32bd9a07ef7dcf998b1d2e8604874cd459d88))


### Bug Fixes

* configure release-please properly and add missing config files ([812b3da](https://github.com/elpic/actions/commit/812b3dab7052cd3176e7c687b78c8a4f61149af6))
* use PAT token for release-please to allow PR creation ([aa0e63b](https://github.com/elpic/actions/commit/aa0e63b7205fb91675516b468957b3180adda415))
