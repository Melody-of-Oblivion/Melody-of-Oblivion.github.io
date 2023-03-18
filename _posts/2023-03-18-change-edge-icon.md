---
title: 修改Edge浏览器图标
---

RT，修改为Mahiro样式图标（bushi

图标参考：

![demo](https://raw.githubusercontent.com/Melody-of-Oblivion/MoOpics/main/images/posts/mahiro-edge-icon/example.png)

图标下载：[lanzou](https://wwvc.lanzouy.com/i1gLa0qe5bhe)

把**ico**文件放到一个不怎么会去动的地方，也可以自己简单处理png图片之后再转成新的ico文件。

**修改桌面快捷方式图标**

右键快捷方式，点 `属性`，点 `更改图标`，默认路径是

```
C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
```

点击浏览，找到之前放ico的位置，选择ico文件之后点击打开，选中图标后确定，点击**应用**，确定即可。

**修改任务栏快捷方式图标**

可以直接右键任务栏 Edge 的图标，再右键 Microsoft Edge，点击属性；

或者打开 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs` 这个路径，找到 Microsoft Edge 快捷方式，右键点击属性。

之后的步骤同上，默认路径是

```
%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe
```

修改完之后如果任务栏的图标没有立即变更，可以尝试解除固定之后重新固定一次。