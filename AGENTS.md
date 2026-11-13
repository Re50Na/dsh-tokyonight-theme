# dsh-tokyonight-theme

This is an independent fork of NoNameLeGo/dsh-catppuccin-theme.
The user's TokyoNightPalette.md is the colour authority. Preserve its Night,
Storm and Light base colours. Derived UI ramps live in data/tokyonight-palette.json.

- GUI mapping: scripts/generate-palettes.mjs. Never hand-edit palettes.ts.
- pnpm gen:all regenerates GUI, Shiki and TUI from checked-in inputs.
- DSH snapshot data/dsw-tokens.json is pinned to 639ed015397290b3745d163aafe02ffee4aa3f84.
- Runtime IDs, storage and settings namespaces use tokyonight, separate from Catppuccin.
- Package name: dsh-tokyonight-theme (publication availability not yet verified).
- Keep LICENSE and THIRD_PARTY_NOTICES.md in distributions.
- Preserve upstream glass geometry and registration/persistence safeguards.
- Validate with pnpm typecheck, pnpm typecheck:tests, pnpm build and pnpm test.
- Commit/push/publish only when requested. Do not claim live UI validation without running it.
