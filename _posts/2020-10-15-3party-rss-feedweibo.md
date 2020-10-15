---
title: 利用Weibo to RSS服务订阅微博内容
---

> 最近想用RSS订阅Weibo的福利姬，就稍微研究了下。

RSS订阅其实可以参考 [RSSHub](https://docs.rsshub.app/)，官方部署的在国内不能直连，比较麻烦，所以这里没有讨论RSSHub订阅。

这里我们要使用的是一个叫做 [Weibo to RSS](https://rssfeed.today/weibo/) 的服务。

![weibo2rss-demo](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/weibo2rss/wtrdemo.png)

这是它的主页显示的内容，可以看出这个的用法很简单，就是参考输入框里的

```
https://weibo.com/博主的个性域名
```

输入后点击 `订阅`，就会自动生成RSS地址，添加到RSS阅读器就行。

**但是**，我们会发现还是有许多<u>博主没有设置个性域名</u>，这样我们就碰到了一个问题：我们需要获得到正确的域名才能得到有效的RSS地址。

我们可以参考博主主页的地址栏，**一般来说**，这种情况下我们需要的 `域名`，可以从网页的URL得到。

事实也确实如此。

![demo1](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/weibo2rss/demo1.png)

我们可以从浏览器F12打开控制台（console），输入

```
$CONFIG.oid
```

就可以得到这个博主的oid，而订阅

```
https://weibo.com/博主的oid
```

也是可行的。

上面那张图演示的是URL中的与oid相同的情况，但是也存在不同的情况。

![demo2](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/weibo2rss/demo2.png)

这种情况下用URL里的这一长串数字去订阅是没用的，这时我们只能用上面提到的console方法来获取oid，进而获取订阅地址。