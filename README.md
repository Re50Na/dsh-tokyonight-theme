# Tokyo Night for DeepSeek Harness

基于 [dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) 的独立社区移植版，配色以 [TokyoNightPalette.md](./TokyoNightPalette.md) 为准。

| 主题 | 背景 | 正文 | 强调色 |
| --- | --- | --- | --- |
| Night | `#1a1b26` | `#a9b1d6` | `#7aa2f7` |
| Storm | `#24283b` | `#a9b1d6` | `#7aa2f7` |
| Light | `#e6e7ed` | `#343b58` | `#2959aa` |

提供 GUI 主题、Shiki 代码高亮、跟随系统模式（浅色 Light；深色 Night 或 Storm）、可选玻璃皮肤，以及 dsh-TUI 主题文件。插件设置与 Catppuccin 使用独立命名空间。

## 本地开发与安装

要求 Node >=20、pnpm 10.33.3，DSH 声明下限沿用上游的 >=0.1.7-rc.1；本 fork 的实际兼容性仍需在对应宿主验证。

```sh
pnpm install --frozen-lockfile
pnpm gen:all
pnpm typecheck
pnpm typecheck:tests
pnpm build
pnpm test
```

构建后在 web profile 中本地安装（替换为你的仓库绝对路径）：

```sh
dsh plugin --profile web add link:/absolute/path/to/dsh-tokyonight-theme
dsh web --no-open
```

官方桌面版请使用其应用内插件管理方式；普通 CLI 不管理官方 `desktop` profile。此 fork 尚未发布到 npm，`dsh-tokyonight-theme` 是暂定包名，不代表已占用或可用。

在「设置 → Tokyo Night」选择主题或玻璃效果。代码高亮统一使用默认色板，不提供风格切换；当前版本不提供插件更新检查。与 Catppuccin 同时安装时，请只启用其中一个插件的玻璃层，因为两者仍作用于同一宿主页面。

TUI JSON 位于 `themes/tokyonight-*.json`；插件会在已有 `~/.dsh-tui` 时同步到其 `themes/`，也可以手动复制。备份策略沿用上游。

## 调整配色

- `data/tokyonight-palette.json`：GUI、Shiki、TUI 共用的语义色板。
- `scripts/generate-palettes.mjs`：DSH token 映射。`src/client/palettes.ts` 是生成物，不要手改。
- `scripts/generate-shiki-tokens.mjs`：代码高亮映射。
- `scripts/generate-tui-themes.mjs`：TUI 映射。
- `data/dsw-tokens.json`：锁定 DSH commit `639ed015397290b3745d163aafe02ffee4aa3f84` 的 190-token 快照。

基础色保留原文取值，缺失的背景/边框/次级文字色阶以 sRGB 派生，见 `data/README.md`。运行 `pnpm gen:all` 更新全部生成物；不需要外部缓存或网络。

Tokyo Night 的次级界面和注释刻意低对比，不承诺所有文字达到 AA。交互状态标签与文档预览保留对比度检查。Storm 蓝色状态底使用 10% 强调色混向背景，预览标签使用更亮的文字档位，避免沿用 Catppuccin 映射后失去可读性。

## 来源与许可证

MIT。保留 [LICENSE](./LICENSE) 与 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。插件框架和玻璃皮肤来自 NoNameLeGo/dsh-catppuccin-theme；Tokyo Night 配色来自 Enkia；DSH token 快照来自 DeepSeek。

开发说明见 `CONTRIBUTING.md`；配色输入说明见 `data/README.md`。
