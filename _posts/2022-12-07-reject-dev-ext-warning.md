---
title: 取消Edge开发者模式扩展的警告
---

参考 [StackOverflow](https://stackoverflow.com/questions/59870767/disable-microsoft-edge-chromium-developer-mode-extensions-pop-up-at-startup/70374300#70374300) 的回答

`win + R`，输入

```
%LocalAppData%\Microsoft\Edge\User Data\Default\
```

打开 `Preferences` 文件

搜索 `dev_mode_warning_snooze_end_time`

将后面数字改为 `99999999999000000`

具体效果不确定

上面的回答也有提到换Insider渠道，把数据搬过去

​    

其他工具：[Chrome-Developer-Mode-Extension-Warning-Patcher](https://github.com/Ceiridge/Chrome-Developer-Mode-Extension-Warning-Patcher)