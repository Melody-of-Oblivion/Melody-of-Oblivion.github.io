---
title: 导出Internet Download Manager设置
---

IDM设置的注册表保存路径为 `计算机\HKEY_CURRENT_USER\Software\DownloadManager`

用bat导出idm注册表参考：

```bat
@echo off
reg export "HKEY_CURRENT_USER\Software\DownloadManager" IDM-settings-%date:~,4%-%date:~5,2%-%date:~8,2%.reg
```

