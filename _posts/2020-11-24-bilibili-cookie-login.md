---
title: 使用cookie登录B站
editdate: 2021-02-08
---

# 1. cookie获取

登录B站后查看网页的cookie

![step1](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/blblcookie/1.png)

在这个路径下找到 `SESSDATA`

![step2](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/blblcookie/2.png)



# 2. 使用cookie登录

打开未登录的B站，按F12打开开发者工具。

在Console里输入：

```javascript
document.cookie ="SESSDATA=xxxxxxxxx;domain=.bilibili.com;path=/";
```

`SESSDATA` 后面的xxxxxx替换为上一步的SESSDATE的 `内容`，`域` 和 `路径` 不变，然后按 `Enter` 键。

然后刷新网页，B站就已经登录了。

用这种方法登陆动态页面，会发现点击每个动态的选项（那三个点）按钮，只有未登录时显示的 `举报`，而不是登录后显示的 `置顶` 和 `删除`。要恢复这个功能，需要在Console里再输入：

```javascript
document.cookie ="DedeUserID=xxxxxxxxx;domain=.bilibili.com;path=/";
```

xxxxx内容替换为自己的UID即可。