---
title: 怎么用命令自动生成tauriApp的图标
published_at: 2022-09-24
tags: [tauri,icon,自动化]
---

Tauri 是一个用于使用 Web 技术创建轻量级原生桌面应用程序的工具包。它提供的一项功能是生成不同平台的应用程序图标。
要使用 Tauri 生成应用程序图标，你可以在 Tauri 配置文件（tauri.conf.json）中使用 icon 字段。该字段应设置为将用作生成图标的源的单个图像文件的路径。

你提供的图像文件应该是高分辨率格式（如 PNG 或 SVG），并且最好至少为 512x512 像素。这将确保生成的图标在高分辨率显示器上清晰和清晰。

要生成图标，你可以从命令行运行 tauri icon 命令。这将生成各种大小和格式的图标集，用于不同的平台，包括 Windows、MacOS 和 Linux。生成的图标将放置在 Tauri 项目的 build/icons 目录中。

tauri.conf.json文件中默认的图标设置，这里我们可以保持默认不用动。

```
{
   "icon": [
        "icons/32x32.png",
        "icons/128x128.png",
        "icons/128x128@2x.png",
        "icons/icon.icns",
        "icons/icon.ico"
      ],
}
```



那具体该怎么生成上述图标呢？只需要一个命令即可生成各平台所需的所有图标

```ssh
cargo tauri icon --help
cargo tauri icon ./src-tauri/app-icon.png  -o ./src-ttauri/icons
```

第二行中的参数 app-icon.png 是我们自己设计的图标，最好是1024x1024的高分辨率图标，推荐是svg，-o是指定输出目录，./src-ttauri/icons 是命令生成图标的存放目录

官方文档：https://tauri.app/zh-cn/v1/guides/features/icons

是不是很简单，抓紧搞起来吧