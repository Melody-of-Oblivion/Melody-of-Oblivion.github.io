---
title: Legendary使用
---

Legendary是一个第三方的命令行版Epic客户端，仓库：[github](https://github.com/derrod/legendary)。

下面简单整理了现有的Legendary仓库的使用方法。

​    

登陆：

```
legendary auth
```

按 `Enter` 后浏览器会打开一个网页，可以看出显示的内容应该是个 **json** 文件，复制 **sid** 后面双引号内的内容到cmd中再按 `Enter` 即可登陆。

列出游戏：

```
legendary list-games
```

列出所拥有的游戏（列出 *游戏名、App名、版本*）。

安装一个游戏：

```
legendary install Anemone
```

> **注**：安装游戏要填的名字是App名（App Name），而不是显示的游戏名。

列出已安装的游戏并检查更新：

```
legendary list-installed --check-updates
```

带在线验证运行游戏：

```
legendary launch Anemone
```

运行离线游戏：

```
legendary launch <App Name> --offline --dry-run
```

导入之前安装过的游戏：

```
legendary import-game Anemone /mnt/games/Epic/WorldOfGoo
```

> **注**：导入需要完整的验证让Legendary之后能够正常更新游戏。

同步游戏存档：

```
legendary sync-saves
```

> **注**：第一次运行会提醒你确认并提供存档的位置。

------

更多用法和配置文件什么的看官方仓库就好了。

