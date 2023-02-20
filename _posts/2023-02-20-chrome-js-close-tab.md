---
title: js关闭当前标签页
---

网上能搜到几种js关闭标签页的方法：

```javascript
// 1
window.opener = null;
window.open('', '_self');
window.close();
// 2
window.location.href = "about:blank";
window.close();
// 3
open(location, '_self').close();
```

使用1、3时有可能会报 `Scripts may not close windows that were not opened by script.` ；使用2时可能跳转到空白页就不会关闭了。

解决办法：通过 **window.open(url)** 打开页面