# Obsidian Confetti

An Obsidian plugin that adds confetti celebration effects.

## Features

- Adds a settings tab for configuration.
- More features coming soon.

## Development

```bash
npm install          # Install dependencies
npm run dev          # Watch mode: compile src/main.ts → main.js on change
npm run build        # Production build (type-check + minify)
npm run lint         # ESLint with typescript-eslint + eslint-plugin-obsidianmd
```

### Manual Testing

Copy `main.js`, `manifest.json`, `styles.css` to `<Vault>/.obsidian/plugins/sample-plugin/` and reload Obsidian.

## Releasing

1. Bump `version` in `manifest.json` (SemVer), update `minAppVersion` as needed
2. Run `npm run version` (or manually update `versions.json`)
3. Create GitHub release with tag matching version (no `v` prefix)
4. Attach `manifest.json`, `main.js`, `styles.css` as release assets

> Simplify version bumps: `npm version patch|minor|major` after updating `minAppVersion`.

## License

0-BSD
