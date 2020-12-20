---
title: 重启Onedrive
---

在开机时网络环境有点小 *“异常”* 的时候，Onedrive客户端的登录就有可能一直连不上。

遇到这种问题时可以尝试重启Onedrive：

网络正常时，按 `Win + R`，打开 `运行` 窗口，输入

```
%localappdata%\Microsoft\OneDrive\onedrive.exe /reset
```

就可以重置Onedrive。

然后再按 `Win + R`，输入

```
%localappdata%\Microsoft\OneDrive\onedrive.exe
```

就可以再打开Onedrive了。

但是这样重启之后Onedrive会默认同步所有文件夹并开始同步，不需要同步文件的话需要手动到设置去取消所有文件的同步并删除本地已同步的文件。