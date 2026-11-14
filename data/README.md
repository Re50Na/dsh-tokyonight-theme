# Theme inputs

- tokyonight-palette.json: semantic source for GUI, Shiki and TUI.
  Base colours come from the Tokyo Night palette:
  https://github.com/tokyo-night/tokyo-night-vscode-theme. UI surface and secondary
  label ramps are derived in sRGB, explicitly stored so generation is offline.
  Dark surface0/1/2 mix the documented terminal black towards the background;
  mantle/base use 10%/20% terminal black; crust is the exact Night/Storm background.
  Light surfaces mix the foreground towards the documented Light background.
  Synonyms (mauve, peach, etc.) are adapter slots, not Catppuccin palette values.
- dsw-tokens.json: parsed with scripts/parse-dsh-tokens.cjs from
  https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-theme/src/styles/design-platform.css
  (190 tokens per scheme). Platform-specific overrides are not included.

Run pnpm gen:all. Palette generation has no external cache/network dependency.
