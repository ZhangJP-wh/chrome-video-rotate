# 视频旋转 / Video Rotate

Chrome 扩展：视频右上角自动出现半透明控件，点击顺时针旋转 90°，拖动滑条缩放，也可进入全屏操作。

A Chrome extension with translucent video controls: rotate clockwise by 90°, adjust zoom, and use fullscreen.

**仓库 / Repo:** https://github.com/ZhangJP-wh/chrome-video-rotate  
**版本 / Version:** 1.1.1

## 一句话场景 / What it’s for

- 视频横竖方向不对？点一下旋转 90°。 / Rotate sideways videos with one click.
- 旋转后画面被裁剪？向左拖动滑条缩小。 / Zoom out to fit rotated content.
- 网页播放器空间有限？点击 ⛶，在插件全屏中旋转和缩放。 / Use the extension fullscreen button for more space.

## 给电脑小白：一分钟安装 / 1-minute install

1. 点击绿色 **Code → Download ZIP**，解压。 / Download and unzip the repository.
2. 在 Chrome 地址栏打开 `chrome://extensions`。 / Open the extensions page.
3. 打开右上角「开发者模式」。 / Enable Developer mode.
4. 点击「加载已解压的扩展程序」，选择能直接看到 `manifest.json` 的文件夹。 / Load unpacked and select the folder containing `manifest.json`.
5. 刷新视频页面。 / Refresh the video page.

无需编译、账号或命令行。 / No build, account, or command line required.

## 给 AI Agent：安装指令 / For AI Agents

```text
Install the unpacked Chrome extension from:
https://github.com/ZhangJP-wh/chrome-video-rotate
Download and unzip the repository, open chrome://extensions, enable Developer mode,
and load the folder containing manifest.json. Follow the browser's permission flow.
Refresh a video page and verify the rotation, zoom, and fullscreen controls.
Do not claim verification unless you actually observe the result.
```

详见 [AGENT_INSTALL.md](AGENT_INSTALL.md)。

## 功能 / Features

| 控件 / Control | 行为 / Behavior |
|---|---|
| 旋转 / Rotate | 每次顺时针 90°，第四次恢复 / 90° clockwise per click |
| 缩放 / Zoom | 10%–200%，1% 步长，实时更新 / Live zoom in 1% steps |
| 全屏 / Fullscreen | 点击 ⛶ 进入或退出，Esc 退出 / Toggle with ⛶, exit with Esc |

缩放只改变视频显示大小，不改变清晰度。刷新后恢复默认值。图标为方框加弯箭头，参考常见相册旋转图标形式。

Zoom changes display size, not resolution. Refresh resets adjustments. The icon uses a square and curved arrow.

## 已知限制 / Limits

- 适用于标准 HTML video；特殊播放器、封闭 Shadow DOM 和部分嵌入页面可能不兼容。 / Targets HTML video; special players and closed shadow roots may be unsupported.
- Chrome 内置页面和扩展商店禁止注入脚本。 / Browser internal pages and the Web Store block injection.
- 建议使用插件的 ⛶ 按钮；网站直接对 video 启用的原生全屏可能隐藏控件。嵌入页面需允许全屏。 / Use the extension fullscreen button; native video fullscreen may hide controls. Frames must allow fullscreen.
- 放大可能裁剪，向左拖动缩小即可调整。部分播放器会在视频移动到全屏容器后重置播放或字幕。 / Zooming in can crop content. Some players may reset playback or captions when entering extension fullscreen.
- 当前版本尚未完成真实网站兼容性测试。 / Real-site compatibility testing is pending.

## 更新 / Updating

下载新版替换原文件夹，在扩展管理页点击「重新加载」，再刷新视频页面。已安装副本不会从 GitHub 自动升级。

Replace the local folder, reload the extension, then refresh video pages. GitHub updates do not automatically update installed copies.

## 隐私 / Privacy

无需登录，无统计，不读取 Cookie、不存储浏览记录、不向外部服务器发送数据。脚本仅在页面本地寻找视频并调整显示；自动检测视频需要网站访问权限。

No login, analytics, cookies, browsing-history storage, or external requests. Video detection and display adjustments run locally; site access is needed for automatic detection.

## 变更 / Changelog

### 1.1.1

扩展图标改为方框加旋转箭头。 / Added rotation icons for the extension.

### 1.1.0

新增缩放滑条与插件全屏入口。 / Added zoom slider and extension fullscreen.

### 1.0.0

视频右上角半透明按钮，每次顺时针旋转 90°。 / Translucent clockwise rotation button.

## License

MIT
