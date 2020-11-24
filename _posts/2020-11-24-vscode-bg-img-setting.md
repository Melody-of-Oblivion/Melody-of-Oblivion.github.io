---
title: 直接修改VS Code的背景图
---

从快捷方式定位到VS Code的安装目录，进入 `\resources\app\out\vs\workbench` 这个位置。

我们要修改的是 `workbench.desktop.main.css` 这个文件。

在文件末尾添加以下代码：

```css
body {
    background: url('图片路径') no-repeat center/cover;
    opacity: 0.7; //透明度
}
```

图片路径填图片的位置，也可以在同目录下放入图片文件，图片路径改为图片名即可。