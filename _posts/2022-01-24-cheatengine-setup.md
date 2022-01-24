---
title: 安装Cheat Engine
---

Cheat Engine的网站：[https://www.cheatengine.org/](https://www.cheatengine.org/)

在 [Downloads](https://www.cheatengine.org/downloads.php) 页面能够下载最新的.exe安装包和下方的翻译文件的压缩包。

下载完安装包和翻译文件的压缩包之后，安装Cheat Engine

默认语言选 *English*，点击 `Next` 之后点击 `Decline`，之后就会开始自动安装。

默认会安装在 `C:\Program Files\` 路径下

打开安装根目录的 `languages` 文件夹，把翻译文件压缩包里整个文件夹解压到这个位置。

打开 `language.ini` 文件，把

```ini
PreferedLanguage=*
```

修改为 **PreferedLanguage=翻译文件夹名**，如：

```ini
PreferedLanguage=zh_CN_All
```

就可以启用翻译了。