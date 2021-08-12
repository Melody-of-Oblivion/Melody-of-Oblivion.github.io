---
title: win10家庭版启用组策略gpedit.msc
---

新建.cmd文件，复制内容：

```
@echo off
pushd "%~dp0"
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt
for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"C:\Windows\servicing\Packages\%%i"
pause
```

保存后右键选择 `以管理员身份运行` 。

等待运行完成就可以使用组策略gpedit.msc了。