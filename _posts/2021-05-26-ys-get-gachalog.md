---
title: 抓原神抽卡记录url
---

> 详细可参考：[genshin-gacha-export-js](genshin-gacha-export-js)

安卓端可以连电脑用ADB，输入

```
shell:logcat -e "https.*#log" -m 1 | grep -o "https.*#log"
```

之后开抽卡记录。

PC端的在游戏中打开抽卡记录之后在PowerShell输入

```powershell
# 拼接日志路径
# 外服需要把 原神 改成 Genshin Impact
$output_log_path = "$env:USERPROFILE\AppData\LocalLow\miHoYo\原神\output_log.txt"
# 读取文件
$log = Get-Content $output_log_path
# 提取链接，去除不需要的OnGetWebViewPageFinish:
$urls = $log -match "OnGetWebViewPageFinish:" -match "#/log" -replace "OnGetWebViewPageFinish:",""
# 取最后一个链接
$url = $urls[$urls.Length-1]
# 输出到控制台
Write-Host $url
# 浏览器打开
Start-Process -FilePath $url
# 如果运行ps1脚本
# write-host "按任意键退出..."
# [void][System.Console]::ReadKey($true)
```

浏览器会自动打开url。
