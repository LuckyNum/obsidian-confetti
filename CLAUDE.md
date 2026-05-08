# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Obsidian community plugin (TypeScript → bundled JavaScript via esbuild). Entry point: `src/main.ts` compiled to `main.js` at repo root, loaded by Obsidian.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Watch mode: compile src/main.ts → main.js on change
npm run build        # Production build (type-check + minify)
npm run lint         # ESLint with typescript-eslint + eslint-plugin-obsidianmd
```

No test framework is configured. Testing is manual: copy `main.js`, `manifest.json`, `styles.css` to `<Vault>/.obsidian/plugins/<plugin-id>/` and reload Obsidian.

## Architecture

- **`src/main.ts`** — Plugin entry point. Exports default class extending `Plugin`. Handles lifecycle (`onload`/`onunload`), settings load/save via `this.loadData()`/`this.saveData()`, and registers ribbon icons, commands, setting tabs, DOM events, and intervals.
- **`src/settings.ts`** — Settings interface (`MyPluginSettings`), defaults (`DEFAULT_SETTINGS`), and `SampleSettingTab` class extending `PluginSettingTab`.
- **`styles.css`** — Plugin styles (included in release).
- **`esbuild.config.mjs`** — Bundler config: bundles `src/main.ts` → `main.js` (CJS format), externalizes `obsidian` and CodeMirror/Lezer packages, watches in dev mode.

## Key conventions

- TypeScript strict mode enabled (`strictNullChecks`, `noImplicitAny`, etc.). Target ES6, module resolution Node.
- All feature logic should be split out of `main.ts` into separate modules under `src/`. Keep `main.ts` focused on lifecycle only.
- Use `this.register*` helpers (`registerDomEvent`, `registerInterval`, `registerEvent`) for all listeners so they clean up on plugin unload.
- Command IDs must be stable once released — never rename them.
- Settings use `Object.assign({}, DEFAULT_SETTINGS, await this.loadData())` pattern for merging.
- Bundle everything into `main.js` — no unbundled runtime dependencies.

## Release process

1. Bump `version` in `manifest.json` (SemVer), update `minAppVersion` as needed
2. Run `npm run version` (or manually update `versions.json`)
3. Create GitHub release with tag matching version (no `v` prefix)
4. Attach `manifest.json`, `main.js`, `styles.css` as release assets

## Manifest rules (`manifest.json`)

Required fields: `id`, `name`, `version`, `minAppVersion`, `description`, `isDesktopOnly`. The `id` must never change after initial release.
