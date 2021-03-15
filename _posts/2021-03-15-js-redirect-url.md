---
title: JS页面重定向跳转
---

> 整理自[菜鸟教程](https://www.runoob.com/w3cnote/js-redirect-to-another-webpage.html)。

JS获取URL可以参考之前的[文章](https://melody-of-oblivion.github.io/2021-02-16/js-get-url/)。

​    

# ① window.location.replace("url")

**类似 HTTP 重定向**

将地址替换成新 url，不能通过"前进"和"后退"来访问已经被替换的URL。

​    

# ②window.location.href = "url"

**类似点击 a 标签的链接**。

跳转到指定的 url。

​    

**实例：**

```javascript
// 类似 HTTP 重定向
window.location.replace("https://melody-of-oblivion.github.io/");

// 类似点击链接（a 标签）
window.location.href = "https://melody-of-oblivion.github.io/";
```

