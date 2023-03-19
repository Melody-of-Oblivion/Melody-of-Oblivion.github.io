---
title: 修改Edge浏览器图标
editdate: 2023-03-19
---

RT，修改为Mahiro样式图标（bushi）

图标参考：

![demo](https://raw.githubusercontent.com/Melody-of-Oblivion/MoOpics/main/images/posts/mahiro-edge-icon/example.png)

图标下载：[lanzou](https://wwvc.lanzouy.com/igGBn0qjmgpe)   *解压码: moo*

推荐还是把ico文件放到一个不怎么会去改动操作的地方。

**修改桌面快捷方式图标**

右键快捷方式，点 `属性`，点 `更改图标`，默认路径是

```
C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
```

点击浏览，找到之前放ico的位置，选择ico文件之后点击打开，选中图标后确定，直接点击确定即可。

**修改任务栏快捷方式图标**

可以直接右键点击**任务栏** Edge 的图标，再右键点击 Microsoft Edge，点击属性；

或者直接到 `C:\Users\Username\AppData\Roaming\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar` 

（可以直接用 `win + R` 输入 `%appdata%\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar` 到达）

修改这里 Microsoft Edge 快捷方式，一样的，修改方法同上。

默认路径为

```
%USERPROFILE%\AppData\Local\Microsoft\Edge\User Data\Default\Edge Profile.ico
```

​    

**修改开始菜单图标**

打开 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs` 这个路径，找到 Microsoft Edge 快捷方式，右键点击属性。

默认路径是

```
%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe
```

> 具体怎么保持任务栏Edge图标不变还是有点乱了，过段时间再看看

​    

**磁贴**图标的位置在 `C:\Program Files\WindowsApps` 里，访问WindowsApps文件夹需要权限，有点麻烦，而且文件夹有分版本，还要改图标，目前不考虑。
