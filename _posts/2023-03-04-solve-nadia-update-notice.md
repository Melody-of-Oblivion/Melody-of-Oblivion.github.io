---
title: 解决最新Nadia弹更新的问题
---

打开 `background.js`，找到

```javascript
var updateArr=[
//...
];
```

在第一行 `go/nadia/` 后面加上 **index.html**

重新加载扩展