---
title: win10允许文件拖动
---

`win + R` 输入 `regedit` 打开注册表

找到 HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\

将 **EnableLUA** 项修改为0（不可拖动时为1）

或者直接编写 .reg 文件来操作：

```
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"EnableLUA"=dword:00000000
```

重启电脑后生效。

