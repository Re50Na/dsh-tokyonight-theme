# Contributing

本项目是 DeepSeek Harness 的 Tokyo Night 主题插件。

## 配色与生成物

共用语义色板位于 `data/tokyonight-palette.json`，DSH token 快照及来源见 `data/README.md`。

修改映射或色板后运行：

```sh
pnpm gen:all
```

不要手工编辑 `src/client/palettes.ts`、`src/client/shiki-tokens.ts`
和 `themes/tokyonight-*.json`；它们由脚本生成。

## 本地开发

```sh
pnpm install --frozen-lockfile
pnpm build
```

仓库保留预构建的 `lib/`，不提供安装时自动构建的生命周期脚本。
修改源码后运行 `pnpm build`，将源码与更新的 `lib/` 一并提交。
使用本地路径安装插件后，重新构建并重启 DSH 即可查看修改。
常规验证命令为 `pnpm typecheck` 和 `pnpm build`；
具体是否运行以当前任务要求为准。

主题注册、设置持久化及玻璃层的几何与兼容性保护应保留。

保留 `LICENSE` 与 `THIRD_PARTY_NOTICES.md` 中的声明。
