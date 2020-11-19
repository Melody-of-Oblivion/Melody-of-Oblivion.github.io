---
title: 猫耳FM音频直接下载
editdate: 2020-11-19
---

仅作为这次下载音声的一个小记录，并不是很麻烦。

> FM（Frequency Modulation），调频，习惯上用来指调频广播。
>
> 另外，这种方法不一定适用于其他地方。

以下图片仅供参考。

首先打开音声的网页页面

![demo1](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/maoerfm-dl/demo1.png)

可以看到已经有了下载按钮，但是点击了之后会发现，需要登录

![demo2](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/maoerfm-dl/demo2.png)

但是我老懒人了，只要能搞到手，能不注册就不注册。~~其实就是不想注册罢了~~

右键下方的播放器，选择 `检查`，进入开发者工具。

![demo3](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/maoerfm-dl/demo3.png)

然后就是一个个找了。

我们可以认为~~（eee 确实是这样）~~，播放器要播放音频，那在构成播放器的标签中肯定能找到音频的地址，那么只要我们找到了地址我们就能直接下载音频了。

接下来直接上结论，位置在 `<!--播放器按钮-->` 标注下的类名为`right-side-buttons mpc` 的ul标签下，具体位置简单描述就是：

```html
<ul class="right-side-buttons mpc">
    <div class="playlist-container">
        <div class="content">
            <div class="jspContainer">
                <div class="jspPane">
                    <div class="playlist-sound pld-sound pld-sound-active">
```

在最底下的这个div标签里就可以找到信息，而我们要找的就是 `data-soundurl`，打开下载。

> m4a也是一种音频文件的扩展名。

或者直接在Console（控制台）输入：（就是一行JS代码）

```javascript
$(".pld-sound-active").attr("data-soundurl")
```

按回车就能直接在控制台得到地址，复制后打开。

