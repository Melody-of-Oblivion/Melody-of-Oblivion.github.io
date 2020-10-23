---
title: Pornhub样式logo的一种html写法
---

随便写了一个`.html`，仅供参考。

```html
<body>
    <div class="ph-content">
        <div class="ph-lu">
            <span class="lu-text">Porn</span>
        </div>
        <div class="ph-rd">
            <span class="rd-text">Hub</span>
        </div>
    </div>
</body>

<style>
body,
html {
    background-color: #000;
}

.ph-content {
    display: flex; /*flex是横排，block是竖排*/
    padding: 20px;
    font-weight: 700;
    font-size: 50px;
    width: fit-content;
    text-align: center;
}

.ph-lu {
    padding: 5px 10px;
}

.lu-text {
    color: #fff;
}

.ph-rd {
    background-color: #f90;
    border-radius: 7px;
    padding: 5px 10px;
}
</style>
```

上面代码的演示：

![ph](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/ph-flavour/ph.png)