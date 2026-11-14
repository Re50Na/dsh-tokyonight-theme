# Tokyo Night for DeepSeek Harness

An independent community port of Tokyo Night, based on
[NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme).
Colours follow `TokyoNightPalette.md`: Night, Storm and Light.

Includes GUI themes, Shiki highlighting, follow-system mode, an optional glass
skin and dsh-TUI JSON themes. Settings use a separate `tokyonight` namespace.

This fork has not been published to npm. `dsh-tokyonight-theme` is a provisional
package name. Git installs use the committed, prebuilt `lib/` files without an install-time build hook.
For development, run `pnpm install --frozen-lockfile` and `pnpm build`, then commit the updated `lib/` alongside source changes.
Run `pnpm gen:all` after editing `data/tokyonight-palette.json`; generation works
offline with checked-in inputs. Validate with `pnpm typecheck`,
`pnpm typecheck:tests` and `pnpm test`.

For a web profile: `dsh plugin --profile web add link:/absolute/path/to/repo`.
Official desktop profiles must be managed through the desktop application.
Only enable one glass skin if Catppuccin is installed alongside this fork.

See [the Chinese README](./README.md) for configuration and mapping details.
Development notes are in CONTRIBUTING.md; palette inputs are documented in data/README.md.

MIT; retain LICENSE and THIRD_PARTY_NOTICES.md.
