---
title: 关于tauri的一些知识点积累
published_at: 2023-02-10
tags: [tauri,rust]
---

## 1. tauri项目打包之后按f12键还是能调出调试器，怎么隐藏呢

答：去掉依赖中的devtools即可

```toml
tauri = { version = "1.1.1", features = ["api-all", "devtools","updater"] }
```

***tips***：这个只是控制devtools，右键菜单和其他快捷键还需要再js层禁用
