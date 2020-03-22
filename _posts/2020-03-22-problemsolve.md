---
title: "一些问题的解决方法"
---

这里记录了一些问题的解决方法。

### 1. 新版MS Edge的Flash提示版本过低和出现此Flash Player与您的地区不相容的提示

→ 提示Flash*版本过低*：

在浏览器的地址栏输入`edge://components`，检查更新Adobe Flash Player

→ 提示Flash Player与您的*地区不相容*：

将`C:\Users(用户)\当前的用户名\AppData\Local\Microsoft\Edge\User Data\Default\Pepper Data`里的文件夹删除，然后在`C:\Windows\System32\drivers\etc\hosts`里添加

```hosts
127.0.0.1 geo2.adobe.com
127.0.0.1 flash.2144.com
127.0.0.1 www.2144.cn
127.0.0.1 fpdownload2.macromedia.com
127.0.0.1 fpdownload.macromedia.com
127.0.0.1 macromedia.com
127.0.0.1 flash.cn
```

### 2. QQ远程控制无法点击

先检查设置的权限设置里的远程桌面的`允许远程桌面链接这台计算机`是否勾选；

无法点击的原因可能是系统的UAC（用户账户控制）设置太高导致，点击控制面板的*系统和安全*，在里面找到`更改用户账户控制`，调为`从不通知`；

如果还是不行，可以尝试右键 *计算机* 点击 *属性* ，打开 *高级系统设置* ，在 *远程* 中勾选远程协助；*远程桌面* 选择允许并将"仅允许..."那项取消勾选。

