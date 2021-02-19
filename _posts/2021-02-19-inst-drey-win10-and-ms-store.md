---
title: win10手动安装微软应用商店
---

几种win10版本的简要介绍可以参考这篇[专栏](https://www.bilibili.com/read/cv6606369/)。

俄大神发布精简win10的位置：[link](http://www.emtrek.org/viewforum.php?f=321)

点击文件大小后面的磁铁就能获取磁链了。

顺便这次重装系统用的是 [WinToHDD](https://www.easyuefi.com/wintohdd/index.html)，这种重装方法简单，用免费版的即可。

极限精简版的安装了之后需要手动安装应用商店，Edge也没带有。

打开PowerShell(管理员)输入下面的命令：

```powershell
add-appxpackage -register "C:\Program Files\WindowsApps\*Store*\AppxManifest.xml" -disabledevelopmentmode
```

就可以安装应用商店了。

> （啊，应该是这样的 XD