---
title: 使用cookie登录B站
---

# 1. cookie获取

登录B站后查看网页的cookie

![step1](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/blblcookie/1.png)

在这个路径下找到 `SESSDATE`

![step2](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/blblcookie/2.png)



# 2. 使用cookie登录

打开未登录的B站，按F12打开开发者工具。

在Console里输入

```javascript
document.cookie ="SESSDATA=xxxxxxxxx;domain=.bilibili.com;path=/";
```

`SESSDATA` 后面的xxxxxx替换为上一步的SESSDATE的 `内容`，`域` 和 `路径` 不变，然后按 `Enter` 键。

然后刷新网页，B站就已经登录了。