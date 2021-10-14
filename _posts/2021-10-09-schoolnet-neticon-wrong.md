---
title: 联网显示无Internet连接解决方法
---

> 原帖出处：https://tieba.baidu.com/p/6254237746

**原因分析**：

经注册表选项比对，发现问题出在连网返回值功能有了变化。原理是每当连网后，系统会自动向微软的dns.msftncsi.com发出请求，然后返回一个NCSI.txt的值，这一值如果正确时，则确认为已连网。而Win10最近的版本中，这个返回服务器和值有了新变化并反映为6个注册表项中。这些变化因国内部分运行商的网络重定向，不能得到正确的反馈，因此出现实际能上网确显示为无internet的问题。



下图中第一张图是出错的注册表项：

![img](https://imgsa.baidu.com/forum/w%3D580/sign=5a3238a291510fb37819779fe932c893/e34f02381f30e9240466ea2a43086e061c95f7b7.jpg)

win10更新后出问题的注册项

下图中第二张是18362版之前正确的注册表项：

![img](https://imgsa.baidu.com/forum/w%3D580/sign=c676dd7a00b30f24359aec0bf894d192/cc7f3530e924b89914fe0f2361061d950b7bf6b7.jpg)

修改成正确值的注册项

其中被选中标成蓝色的项，改回为图中所显示的值，EnableActiveProbing仍恢复为1，重启系统后，网络即能恢复正常。



注册表项具体在：

```
\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NlaSvc\Parameters\Internet
```

请对照图中值修改