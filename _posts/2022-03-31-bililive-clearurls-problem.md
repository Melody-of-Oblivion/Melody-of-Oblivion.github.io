---
title: 解决ClearURLs扩展开启时B站直播间天选无法点击的问题
---

在设定中将 `请求类型` 里的 **sub_frame** 删除。

默认请求类型：

```
main_frame,sub_frame,stylesheet,script,image,font,object,xmlhttprequest,ping,csp_report,media,websocket,other
```

