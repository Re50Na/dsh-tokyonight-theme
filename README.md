<h3 align="center">
	Catppuccin for <a href="https://github.com/deepseek-ai/deepseek-harness">DeepSeek Harness</a>
</h3>

**中文** | [English](README.en.md)


<p align="center">
	<img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin-theme/main/assets/previews/combined.png" width="100%" alt="Catppuccin 四主题下的 DeepSeek Harness"/>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin-theme/main/assets/previews/glass-combined.png" width="100%" alt="玻璃质感 · Latte & Mocha"/>
</p>

## 简介

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的
[Tokyo Night](https://github.com/tokyo-night/tokyo-night-vscode-theme/tree/master) 主题插件，从[Catppuccin for DeepSeek Harness](https://github.com/NoNameLeGo/dsh-catppuccin-theme/tree/main)项目移植。

包含[enkia](https://github.com/tokyo-night/tokyo-night-vscode-theme/commits?author=enkia)设计的[Tokyo Night](https://github.com/tokyo-night/tokyo-night-vscode-theme/tree/master)的三个UI及代码着色主题——**Tokyo Night Light**、**Tokyo Night Dark**、**Tokyo Night Storm**。

同时内置一套可开关和配置的**玻璃质感**（Glassmorphism）皮肤，颜色自动跟随当前设置的主题。（交互参考 [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin)）

配色及质感可在设置独立页面中调整，选择会自动保存、重启自动恢复。


## 预览

四个主题在 DeepSeek Harness 中的实际效果（截图来自本地 GUI，文首大图为四主题斜切合成）：

<details>
<summary>🌻 Latte（浅色）</summary>
<img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin-theme/main/assets/previews/latte.png"/>
</details>
<details>
<summary>🪴 Frappé（深色）</summary>
<img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin-theme/main/assets/previews/frappe.png"/>
</details>
<details>
<summary>🌺 Macchiato（深色）</summary>
<img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin-theme/main/assets/previews/macchiato.png"/>
</details>
<details>
<summary>🌿 Mocha（深色）</summary>
<img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin-theme/main/assets/previews/mocha.png"/>
</details>

### 玻璃质感（Mica 云母模式）

同一会话在浅色（Latte）与深色（Mocha）下的磨砂玻璃效果：顶栏、侧边栏、
聊天气泡与输入框都是玻璃卡片，消息滚过页面边缘时被柔化
（截图来自本地 GUI）：

<details>
<summary>🌻 Latte（浅色玻璃）</summary>
<img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin-theme/main/assets/previews/glass-latte.png"/>
</details>
<details>
<summary>🌿 Mocha（深色玻璃）</summary>
<img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin-theme/main/assets/previews/glass-mocha.png"/>
</details>

## 安装

### 方式一：从 npm 安装（推荐）

```sh
dsh plugin --profile web add @nonamelego/dsh-catppuccin
```

装完重启 `dsh web` 即可，`dsh plugin` 会自动把它加进 profile 的 bundles。
其他 profile 把命令里的 `web` 换成对应名字即可（如 `headless`）。

**桌面版**：官方桌面壳与社区桌面壳都读**同一个 profile** `$DSH_HOME/profiles/desktop`，但
**两者装/升插件的方式完全不同、也不通用**——按你用的壳选一列：

| | 官方桌面壳（[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 客户端） | 社区桌面壳（[DSH Desktop](https://github.com/anywhere-labs/dsh-desktop)） |
|---|---|---|
| **安装** | 应用内的**插件界面** → 添加插件 → 填包名 `@nonamelego/dsh-catppuccin`（也接受 Git 地址 / 压缩包 / 本地路径） | 在打开的 **终端**里执行命令：<br>`dsh plugin --profile desktop add @nonamelego/dsh-catppuccin` |
| **升级** | **先在插件界面里把插件删除，再重新填一遍同一个包名安装**（v0.2.0 没有升级入口，也没有版本选择器） | 与 web 类似的更新命令：<br>`dsh plugin --profile desktop update @nonamelego/dsh-catppuccin` |
| 谁执行 pnpm | 应用自带的 pnpm | 应用自带的 pnpm |

两种方式改完都要**重启桌面应用**才会加载新版本。

> ⚠️ **两列别混用**：官方壳的插件界面不执行命令；社区壳那条 `update` 命令对官方壳也不适用。
> 另外，**系统 PATH 上那个普通 `dsh` 两个壳都管不了 `desktop`**——上游把 `desktop` 当自己保留的
> profile，会直接报 `error: profile "desktop" is managed exclusively by the Electron application`。
> 想用 CLI 管就用别的 profile 名（`web`、`headless`、`dsh-tui`）。

> 本插件的桌面支持以
> **官方 web + 官方 desktop** 为维护核心；社区壳的 `desktopProfiles` 服务探测也保留。
> 但官方壳的 profile 进程**没有**专用的环境标记（它的 `DSH_DESKTOP_NODE_EXECUTABLE` 只注入给
> 包安装子进程），所以本插件改为识别 **Electron-as-node 运行时**（`process.versions.electron`）
> 来判定官方桌面版；设置的读写不受影响。

### 方式二：从仓库安装

```sh
dsh plugin --profile web add https://github.com/Re50Na/dsh-tokyonight-theme
```

从 git 安装时 pnpm 可能要求允许构建脚本——按 pnpm 的提示把对应包加进 profile
`pnpm-workspace.yaml` 的 `allowBuilds` 后重跑一次即可。

桌面版同理，但按上面的表走：**官方壳**在插件界面里直接填 Git 地址；**社区壳**把这条命令的
`dsh plugin --profile web add …` 换成 `dsh plugin --profile desktop add …`。

### **[dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI)**（终端版）主题

本节针对第三方终端前端 **[dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI)**（需先自行装好它）。
与 Web GUI 插件同一个包，用标准的插件安装命令装进 dsh-tui profile：

```sh
dsh plugin --profile dsh-tui add @nonamelego/dsh-catppuccin
```

从仓库安装同理（也可用 git 形式，效果一致）：

```sh
dsh plugin --profile dsh-tui add https://github.com/Re50Na/dsh-tokyonight-theme
```

包里带一个只做主题同步的小插件行：dsh-TUI 启动时自动把四套主题 JSON 同步到 `~/.dsh-tui/themes/`，之后升级包即同步新版配色。装完启动 `dsh --profile dsh-tui`，在 dsh-TUI 里用 `/theme` 选择 **tokyonight-night / tokyonight-storm / tokyonight-light **，或直接 `/theme tokyonight-X` 切换（选择会持久化，下次启动自动恢复）。

> 💡 已为 Web GUI 装过本插件、同时用 dsh-TUI 的话，无需重复安装：Web 端每次
> 启动会自动同步主题到 `~/.dsh-tui/themes/`（仅当该目录已存在）。

> 📁 不想装包也可手动复制：把 `themes/*.json` 拷进 `~/.dsh-tui/themes/`
> （Windows：`%USERPROFILE%\.dsh-tui\themes\`）。


> 💡 TUI 主题只管 TUI 内部配色，终端背景由你的终端决定——建议也配上对应。
> （一个Tokyo Night主题的壁纸Repo:[wallpapers](https://github.com/tokyo-night/wallpapers) ）

### 自定义覆盖

- **自定义覆盖**（折叠区，按钮上显示已有条数）：按「`--dsw-* 变量: 值`」逐条覆盖单个 token，
  例如 `--dsw-static-blue-500` → `#89b4fa`。**键名**失焦生效（必须以 `--` 开头，否则该条会被丢弃）；
  **值**同样失焦生效、**清空值即删除该条**；✕ 删除整行。覆盖持久保存，与所选风味一起生效。


## 💝 致谢

- [Catppuccin for DeepSeek Harness](https://github.com/NoNameLeGo/dsh-catppuccin-theme/tree/main)提供的整体架构、配色修改和玻璃质感实现
- [Catppuccin](https://github.com/catppuccin) 提供的色板与 port 模板
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的插件体系
- [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin)
  的玻璃质感交互与实现参考（云母 / 兼容双模式、模糊度 / 磨砂度等旋钮设计）

## 许可
MIT。 


