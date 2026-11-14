# dsh-tokyonight-theme

This is an independent fork of NoNameLeGo/dsh-catppuccin-theme.
The colour authority is data/tokyonight-palette.json. Preserve the documented
Night, Storm and Light base colours and derived UI ramps.

- GUI mapping: scripts/generate-palettes.mjs. Never hand-edit palettes.ts.
- pnpm gen:all regenerates GUI, Shiki and TUI from checked-in inputs.
- DSH snapshot data/dsw-tokens.json is pinned to 639ed015397290b3745d163aafe02ffee4aa3f84.
- Runtime IDs, storage and settings namespaces use tokyonight, separate from Catppuccin.
- Package name: dsh-tokyonight-theme; stable releases use the latest npm channel.
- Keep LICENSE and THIRD_PARTY_NOTICES.md in distributions.
- Preserve upstream glass geometry and registration/persistence safeguards.
- Validate source changes with pnpm typecheck and pnpm build; no unit-test suite is retained.
- Commit/push/publish only when requested. Do not claim live UI validation without running it.

- Commit prebuilt lib/ with source changes after running pnpm build.
- Do not add install-time build hooks; Git installs consume prebuilt runtime files.
