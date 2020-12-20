---
title: 萌百防剧透「黑幕」实现
---

> 简单实现，仅供参考。

随便挑了一段萌百页面的内容来实现。

原理也比较简单，就用css的 `:hover选择器` 来实现就行。

html文件参考：

```html
<head>
    <link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div>
        <span class="text">
        胸围随萌百条目数量增长，微妙的正相关关系。
            <span title="你知道的太多了。" class="hidden-text">
                到2018年9月13日的
                <a href="https://zh.moegirl.org.cn/File:Moegirl-wallpaper-fall-2018.png" title="File:Moegirl-wallpaper-fall-2018.png">
                    秋季立绘
                </a>
                出现时已变成
                <a href="https://zh.moegirl.org.cn/%E5%B7%A8%E4%B9%B3" title="巨乳">
                    巨乳
                </a>
                。
            </span>
        </span>
    </div>
</body>
```

css文件参考：

```css
html,
body {
    font-family: Arial, Helvetica, sans-serif;
}

a {
    color: #252525;
    text-decoration: none;
}

.text {
    font-size: 1rem;
}

.hidden-text {
    color: #252525;
    background-color: #252525;
    padding: 2px;
}

.hidden-text:hover{
    color: #fff;
    transition-duration: 0.4s;
}

.hidden-text:hover a{
    color: #a4cddc;
    transition-duration: 0.4s;
}

a:hover {
    text-decoration: underline;
}
```

html这样写会在标签和标签或内容之间产生空格，内容合并为一行就没空格了，但是不好看；

不用合并到一行的方法还没研究。‍\_(:з」∠)_