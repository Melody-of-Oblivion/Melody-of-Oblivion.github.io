---
title: 强制关闭OD预览更新
---

新建 .reg 注册表

```
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Onedrive]
"GPOSetUpdateRing"=dword:00000000
```

保存后双击使用