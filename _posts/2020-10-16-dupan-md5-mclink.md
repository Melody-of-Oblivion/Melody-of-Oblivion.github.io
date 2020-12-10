---
title: 毒盘与秒传链接
editdate: 2020-12-10
---

> 这里不说太多没用的东西，就整理整理大概的原理和使用方法。

目前就国内的网盘形势来看，度盘还是存在着一定的存储/分享的需求，但是一些资源经常炸（不管什么原因），这就让补档工作变得非常麻烦。

这里要讲的是黑科技【**秒传链接**】，原理是根据文件的MD5直接在BD服务器上搜索相关文件, 来实现转存，而不用官方的分享链接，这样就能减小炸资源的概率。只要BD的服务器里还存着资源，就算上传者的文件被删除，秒传链接也是可以正常使用的（除非md5被炸）。

**秒传常用格式：**

​	如果开头为 bdpan://，那么就是 pandl 格式的链接；

​	如果开头为 BDLINK，那么就是游侠专用格式；

​	如果开头没有特征，只是是一堆包含 0-9 和 A-E 的字符串，那就是梦姬标准链接。

------

# 秒传链接使用

## 1.网页转存

> 12.10测试发现网页转存没法用了，不知道会不会恢复

访问 [百度网盘秒传链接转存](https://rapid.acg.uy/)

秒传链转存网站更新成了点击就能获取bdstoken

填入 bdstoken 和秒传链接，然后点 `解析链接并转存`。

![new](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/sectrans/mcdemo.png)

------

## 2.脚本转存

浏览器安装Tampermonkey扩展。

再安装脚本： [仓库用度盘投稿助手](https://greasyfork.org/zh-CN/scripts/3285-%E4%BB%93%E5%BA%93%E7%94%A8%E5%BA%A6%E7%9B%98%E6%8A%95%E7%A8%BF%E5%8A%A9%E6%89%8B) / [秒传链接提取](https://greasyfork.org/zh-CN/scripts/397324-秒传链接提取)

度盘的个人主页会多出秒传链接的按钮。

用这种方法也可以转存。

------

## 3.一键秒传

**注**：这种方法也需要安装脚本才行。

把秒传链接用 [base64加密](http://tool.chinaz.com/tools/base64.aspx)，然后在加密后的字符串前面加上

```
https://pan.baidu.com/#bdlink=
```

即可。

------

## 4.PanDownload转存

原版的PD已经没了，我们用其他的[修改版](https://github.com/PanDownloadServer/Server/releases)来进行转存。

启动后需要登录网盘账号（因为是转存到自己盘啊）

在 `分享链接` 界面的 `输入分享链接或秒传链接` 栏输入 `bdpan://` 格式的秒传链。

不同格式秒传链的转换可以见：[百度网盘秒传链接转换](https://rapid.acg.uy/convert.html)

------

# 生成秒传链接

## 1.网页生成

打开 [百度网盘秒传链接生成](https://rapid.acg.uy/gen.html)，选择本地的文件（要秒传的文件，度盘要有上传），下方会生成秒传链接。

## 2.软件生成

用本地秒传链接生成器：[decode](https://github.com/jixunmoe/mfcDuDownloadCodeGenerator/releases)

选择要秒传的文件。

同样的，度盘要上传过这个资源才行。

## 3.脚本生成

按上面使用秒传链接的脚本转存的第二个方法里

秒传链接提取脚本更新了生成的功能。

------

# 使用注意

1. 文件需要上传到毒盘，秒传链才会生效
2. 秒传链生效需要一些时间，文件越大越可能延时生效（推荐使用毒盘客户端来上传文件）
3. 做好文件夹加密防止被炸，加密也要**文件夹加密**（打开后没输入密码无法查看文件名），避免在线解压（若压缩包内有黑名单文件，一打开压缩包直接被封）
4. 若秒传链被炸，可能就需要修复秒传链了（修改文件md5），方法见下文
5. 毒盘客户端重传文件大概率能够修复秒传链

# 秒传链修复（文件md5修改）

1. **改变文件内容**

   比如将原文件再套一层压缩，在原压缩包内添加一些文件/修改一些文件名，改密码重新压缩等等，都是可以改变文件md5的

   然后再重新上传文件，并重新生成秒传 (md5修改后秒传也需要修改)

2. **用md5修改工具**

   工具名：**Hash Manager**

   这个工具不适用于7z分卷，7z分卷通过此类工具修改md5后会无法解压，zip分卷和rar分卷则不影响

   原理是在文件尾添加一些无效数据，进而改变md5，一般对文件无影响，7z分卷除外

   然后就可以再重新上传文件，并重新生成秒传 (md5修改后秒传也需要修改)
