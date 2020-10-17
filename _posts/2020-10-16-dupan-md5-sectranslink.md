---
title: 毒盘与秒传链接
editdate: 2020-10-17
---

> 这里不说太多没用的东西，就整理整理大概的原理和使用方法。

目前就国内的网盘形势来看，度盘还是存在着一定的存储/分享的需求，但是一些资源经常炸（不管什么原因），这就让补档工作变得非常麻烦。

这里要讲的是黑科技【**秒传链接**】，原理是根据文件的MD5直接在BD服务器上搜索相关文件, 来实现转存，而不用官方的分享链接，这样就能减小炸资源的概率。只要BD的服务器里还存着资源，就算上传者的文件被删除，秒传链接也是可以正常使用的。

**秒传常用格式：**

​	如果开头为 bdpan://，那么就是 pandl 格式的链接；

​	如果开头为 BDLINK，那么就是游侠专用格式；

​	如果开头没有特征，只是是一堆包含 0-9 和 A-E 的字符串，那就是梦姬标准链接。

# 秒传链接使用

## 1.网页转存

访问 [百度网盘秒传链接转存](https://rapid.acg.uy/)

![转存网页演示](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/sectrans/zcdemo.png)

我们先要获得 **<u>bdstoken</u>**，点击 `复制代码`，复制网站提供的JS代码。

浏览器打开度盘的个人主页，按F12进入控制台（*console*），粘贴这段代码并按 `Enter` 键运行，就能复制到 bdstoken。（可以保留 bdstoken 多次使用）

![控制台](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/sectrans/console.png)

填入 bdstoken 和秒传链接，然后点 `解析链接并转存`。

## 2.脚本转存

浏览器安装Tampermonkey扩展。

再安装这个脚本： [仓库用度盘投稿助手](https://greasyfork.org/zh-CN/scripts/3285-%E4%BB%93%E5%BA%93%E7%94%A8%E5%BA%A6%E7%9B%98%E6%8A%95%E7%A8%BF%E5%8A%A9%E6%89%8B)

度盘的个人主页会多出一个按钮：

![秒传链接按钮](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/sectrans/btn.png)

用这个也可以转存。

## 3.一键秒传

**注**：这种方法也需要安装脚本。

把秒传链接用 [base64加密](http://tool.chinaz.com/tools/base64.aspx)，然后在加密后的字符串前面加上

```
https://pan.baidu.com/#bdlink=
```

即可。

# 生成秒传链接

## 1.网页生成

打开 [百度网盘秒传链接生成](https://rapid.acg.uy/gen.html)，选择本地的文件（要秒传的文件，度盘要有上传），下方会生成秒传链接。

## 2.软件生成

用本地秒传链接生成器：[decode](https://github.com/jixunmoe/mfcDuDownloadCodeGenerator/releases)

选择要秒传的文件。

同样的，度盘要上传过这个资源才行。