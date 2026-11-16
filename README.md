# 视频旋转 / Video Rotate

Chrome 扩展：视频右上角自动出现旋转和缩放控件。每次顺时针旋转 90°，拖动滑条或点击 − / + 调整大小。

Chrome extension: rotate videos clockwise by 90° and zoom with a slider or − / + buttons.

**仓库 / Repo:** https://github.com/ZhangJP-wh/chrome-video-rotate  
**版本 / Version:** 1.2.1

## 给电脑小白：一分钟安装 / 1-minute install

1. 点击 **Code → Download ZIP** 并解压。 / Download and unzip.
2. 打开 `chrome://extensions`，开启「开发者模式」。 / Enable Developer mode.
3. 点击「加载已解压的扩展程序」，选择包含 `manifest.json` 的文件夹。 / Load unpacked.
4. 刷新视频页面。 / Refresh video pages.

无需编译、登录或命令行。 / No build, login, or command line required.

## 使用 / Usage

| 控件 / Control | 行为 / Behavior |
|---|---|
| 旋转 / Rotate | 每次顺时针 90°，第四次恢复 / 90° clockwise per click |
| − / + | 每次缩小 / 放大 1 个百分点 / Change zoom by 1 percentage point |
| 滑条 / Slider | 10%–200%，步长 1%，实时显示百分比 / Live zoom in 1% steps |
| Chrome 插件图标 / Extension icon | 点击隐藏，再点显示；对所有页面生效并记住开关 / Toggle controls globally; preference persists |

整组控件（图标、数字、滑条及背景）平时仅 18% 不透明度，鼠标移入或键盘聚焦时清晰显示。隐藏控件不会撤销已设置的旋转或缩放。可在 Chrome 工具栏固定插件图标，或从扩展菜单点击。本扩展不提供全屏功能。

All controls fade to 18% opacity when idle and become clear on hover or keyboard focus. Hiding controls preserves rotation and zoom. Pin the icon or click it in Chrome's extensions menu. No extension fullscreen feature.

## 给 AI Agent / For AI Agents

按 [AGENT_INSTALL.md](AGENT_INSTALL.md) 安装并验证。 / Follow the installation and verification guide.

## 更新 / Updating

用新版文件替换原文件夹，在 `chrome://extensions` 点击「重新加载」，再刷新视频页面。已安装副本不会随 GitHub 自动更新。

Replace the local files, reload the extension, and refresh video pages. Installed copies do not auto-update from GitHub.

## 隐私 / Privacy

不读取 Cookie、不保存浏览记录、无统计和外部请求。仅使用 `chrome.storage.local` 保存显示开关；自动检测视频需要网站访问权限。

No cookies, browsing-history storage, analytics, or external requests. Only the visibility preference is saved locally. Site access enables video detection.

## 已知限制 / Limits

适用于普通 HTML video。Chrome 内置页面、扩展商店、封闭 Shadow DOM 和特殊播放器可能不支持。网站的原生全屏可能隐藏控件。放大或旋转可能受播放器边界裁剪，可缩小调整。真实网站兼容性尚未全面实测。

Targets HTML video. Internal pages, the Web Store, closed shadow roots, and special players may be unsupported. Native fullscreen may hide controls. Zoom out to reduce cropping. Real-site compatibility has not been comprehensively tested.

## 变更 / Changelog

### 1.2.1

控件固定在原始播放区域的右上角，旋转或缩放视频不改变控件大小与位置。页面滚动或播放器布局改变时仍跟随播放区域。 / Controls stay anchored to the original playback box when the video rotates or zooms, while following page scrolling and layout changes.

### 1.2.0

移除插件全屏功能；增加 − / + 1% 微调；统一淡化全部控件，悬停时清晰显示；点击插件图标切换控件显示。

Removed extension fullscreen; added 1% adjustment buttons, unified idle transparency, and toolbar visibility toggle.

### 1.1.1

新增方框加旋转箭头的扩展图标。 / Added rotation extension icons.

### 1.1.0

新增缩放滑条及全屏入口（全屏已于 1.2.0 移除）。 / Added zoom and fullscreen (fullscreen removed in 1.2.0).

### 1.0.0

每次顺时针旋转 90°。 / Clockwise rotation.

## License

MIT
