---
title: 获取B站注册时间
editdate: 2022-03-21
---

访问 `https://member.bilibili.com/x2/creative/h5/calendar/card?ts=0` 或者 `https://member.bilibili.com/x2/creative/h5/calendar/event?ts=0`

找到 **jointime**，后面的一串10位的数字就是注册的时间戳了

找个 [在线工具](https://tool.lu/timestamp/) 直接转换，或者用js

```javascript
var timestamp = xxxxxxxxxx;
var result = new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
console.log(result);
```

