# Tokyo Night fork

## [Unreleased]

- 移除代码高亮风格选择，统一使用默认 Tokyo Night 高亮；旧风格设置仅保留兼容读取。
- 移除更新检查界面、后台定时检查和服务端更新路由。

- 参照 TokyoNightPalette.md 移植 Night、Storm、Light，GUI / Shiki / TUI 共用色板。
- 独立插件身份、设置与缓存命名空间；保留原有玻璃效果和持久化保护。
- 将 DSH token 快照和色板纳入仓库，实现离线可复现生成。
