---
title: 使用cookie登录B站
editdate: 2021-12-10
---

# 1. cookie获取

登录B站后查看网页的cookie

![step1](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/blblcookie/1.png)

在这个路径下找到 `SESSDATA`、`DedeUserID`、`bili_jct`，复制内容。

![step2](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/blblcookie/2.png)



# 2. 使用cookie登录

打开未登录的B站，按F12打开开发者工具。

在Console里输入：

```javascript
document.cookie ="SESSDATA=xxxxxxxxx;domain=.bilibili.com;path=/";
document.cookie ="DedeUserID=xxxxxxxxx;domain=.bilibili.com;path=/";
document.cookie ="bili_jct=xxxxxxxxx;domain=.bilibili.com;path=/";
location.reload(); // 刷新网页
```

xxxxx内容替换为自己的cookie即可。