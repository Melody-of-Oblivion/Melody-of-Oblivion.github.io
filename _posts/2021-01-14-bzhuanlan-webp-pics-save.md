---
title: B站专栏图片保存
---

以某篇B站专栏为例，保存这张~~放大修复的~~图：

![1](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/save-bzhuanlan-pics/1.png)

使用浏览器为**Edge**，右键这张图点击 `检查`，右边会弹出开发者工具：

![2](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/save-bzhuanlan-pics/2.png)

`data-src` 和 `src` 后面的都是这张图的地址，就算不打开也能简单地直接看出这张图的格式是 `.webp`。

直接右键点击图片另存为，或者通过编辑选中打开上面看到的链接保存图片，默认的保存格式是 `.webp`，保存后打开是调用浏览器打开，并没有保存正常的jpg或者是png的图片到本地，文件的大小和图片的尺寸都不够大。

webp相关的可以上网自查。

可以看到上图链接中从末尾的webp往前到@之前有个 `.png`，我们可以猜测前面那段链接就是原始图片的链接。

复制那段链接删除后面从**@**开始的部分访问，就会发现图片大了很多，右键另存为即可保存。