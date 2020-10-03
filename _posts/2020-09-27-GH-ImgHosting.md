---
title: Github+jsDelivr打造自己的图床
editdate: 2020-10-03
---

图床（*Image Hosting Service*），简单来说就是一个专门用来存放图片的空间，同时允许你在其他地方通过链接引用这些图片，还是挺有用处的。

jsDelivr 则是一个免费的CDN，可以加速npm、Github、WordPress的资源，这里只是简单讲讲，不做详细的介绍，具体的可以见[官网](https://www.jsdelivr.com/)。

Github 咱就不做什么介绍了 XD。

------

将Github作为图床，首先要在Github新建一个仓库（*repository*）

将图片上传到仓库

- 如果图片上传到根目录，如 `example.jpg`，则jsDelivr的链接就是

  ```
  https://cdn.jsdelivr.net/gh/用户名/仓库名/example.jpg
  ```

  > 有可能是 https://cdn.jsdelivr.net/gh/用户名/仓库名@分支/example.jpg

- 如果图片上传到了文件夹里，如 `/images/example.png`，则jsDelivr的链接就是

  ```
  https://cdn.jsdelivr.net/gh/用户名/仓库名/images/example.png
  ```

- 文件夹以此类推

上面讲的只是jsDelivr最简单的一种用法，做Gtihub图床已经够用了。

接下来稍微讲讲图片的上传管理

1. 最简单、最原始的，直接在Github仓库的网页上传图片

   直接选择图片文件或在本地建文件夹放入图片上传。

2. 稍微方便点的，用[Github Desktop](https://desktop.github.com/)

   用Github Desktop克隆仓库到本地，在本地的仓库中放入图片或建文件夹放入图片，再用Github Desktop上传。这样方便图片的管理和上传。

3. 用[PicGo](https://github.com/Molunerfinn/PicGo)上传图片

   这个我没用过‍，反正上传图片用的就是了，可以自己去看看。  \_(:з」∠)_

在其他地方引用jsDelivr的链接就完事了‍。ㄟ(´･ᴗ･`)ノ

​    

> 本文并没有做细致讲解，仅是“够用”的程度，更深入的可以自行搜索了解。
>
> 注意：建议作为图床的仓库不要存太多图片，尽量控制在1G以内。

