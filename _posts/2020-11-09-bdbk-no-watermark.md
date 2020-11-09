---
title: 简单获得百度百科无水印图片
---

操作整体还是挺简单的。

首先打开百度百科的图册，右键图片点击 `检查` 打开开发人员工具。

![1](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/bdbk-no-wm/1.png)

复制开发人员工具中的图片链接，比如图中的就是

```
https://bkimg.cdn.bcebos.com/pic/9213b07eca8065389daf5bdd9adda144ac3482b3?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5
```

删除 `image/watermark`：

```
https://bkimg.cdn.bcebos.com/pic/9213b07eca8065389daf5bdd9adda144ac3482b3?x-bce-process=,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5
```

打开这个链接就是无水印的图片了，右键 `另存为` 即可保存，