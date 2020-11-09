---
title: 删除/恢复Win10的3D对象文件夹
editdate: 2020-11-09
---

我们可以通过修改注册表来删除或恢复Win10的3D对象文件夹，这里讲的方法比较方便。

复制下方的内容保存为 `.reg` 文件并双击使用即可。

1. **删除3D对象文件夹.reg**

   ```
   Windows Registry Editor Version 5.00
   
   [-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}]
   ```

2. **恢复3D对象文件夹.reg**

   ```
   Windows Registry Editor Version 5.00
   
   [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}]
   ```
