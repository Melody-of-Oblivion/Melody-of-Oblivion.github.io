---
title: 关闭OD版本控制
---

# 1.关闭版本控制

点击 OneDrive 页面右上角齿轮，点击 `OneDrive 设置`，选择其他设置，点击 `返回旧版网站设置页面`。进入旧版设置页面后，点击进入网站管理下的 `网站库和列表`，选择 `自定义“文档”`，点击 `版本控制设置`，可以看到 **文档版本历史记录** 下没有关闭版本控制的选项，版本控制是被强制开启了。

如果是管理员，可以使用 Power Shell，命令如下：

```powershell
Install-Module -Name Microsoft.Online.SharePoint.PowerShell

Import-Module Microsoft.Online.SharePoint.PowerShell -DisableNameChecking
Connect-SPOService -Url https://YOURSITE-admin.sharepoint.com -Credential YOU@YOURSITE.onmicrosoft.com # YOU@YOURSITE.onmicrosoft.com 就是管理员的邮箱号，注意替换

Set-SPOTenant -EnableMinimumVersionRequirement $False

Disconnect-SPOService
```

完成后重新进入旧版设置的版本控制页面，在 **文档版本历史记录** 的选项新增了 `无版本控制`，选中后确定保存即可。

# 2.清理旧版本文件

1. 手动清理：

   在新版 OD 的其他设置页面点击 `存储标准`，进入 Documents，找到各个文件，点击最右边的 **版本历史记录**，有多个版本的就点击左上角的 `删除所有版本`。

2. 使用 [rclone](https://rclone.org/downloads/)：

   下载最新 win 版 rclone 到一个新文件夹里，打开 cmd，cd 到 rclone.exe 的路径，输入

   ```shell
   rclone authorize "onedrive"
   ```

   浏览器弹出页面后进行登录授权，可以获取一串 {...} 的密钥。

   再输入

   ```shell
   rclone config
   ```

   按提示挂载网盘。name 名称随意，client_id 与 client_secret 留空，跟着步骤登录验证，如果是提示 rclone authorize "onedrive" 的 result，则输入 {...} 那一串密钥。

   挂载完成后，使用 rclone 来清理旧版本文件：

   ```shell
   rclone cleanup -i remote:path/subdir # -i 为交互式删除
   rclone cleanup remote:path/subdir
   ```

   remote 就是给挂载网盘设定的名称，如 disk 就是 **disk:**，后跟需要清理的文件夹路径，rclone 会自动遍历路径下的所有文件并清理旧版本的文件，这个过程会比较慢。

参考：[Microsoft OneDrive | rclone](https://rclone.org/onedrive/#disabling-versioning)