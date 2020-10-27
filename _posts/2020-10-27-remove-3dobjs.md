---
title: 移除Win10的3D对象文件夹
---

> 小记录一下。

1. 新建一个 `.bat` 文件，编辑并在里面添加以下的代码：

   ```
   @echo off
   REG DELETE “HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}” /f
   REG DELETE “HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}” /f
   exit
   ```

2. 以管理员身份运行这个 `.bat` 文件。

