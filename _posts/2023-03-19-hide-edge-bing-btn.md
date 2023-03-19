---
title: 隐藏Edge的bing图标
---

除了注册表方法，也可以等待113版本更新加入开关功能。

临时解决的话，也可以找到打开Edge的快捷方式的位置，在 `目标` 的后面空一格加入

```
--disable-features=msUndersideButton
```

之后<u>用这个快捷方式</u>打开Edge应该就不会再显示这个按钮了。

而这个 Discovery Chat 功能可以由此 [进入](https://edgeservices.bing.com/edgediscover/query?clientscopes=windowheader,coauthor,chat,&udsframed=1)