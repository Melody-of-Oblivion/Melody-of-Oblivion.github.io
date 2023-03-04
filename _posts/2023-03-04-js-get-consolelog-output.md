---
title: JS捕获console.log()的输出
---

网上抄的

```javascript
let lastLog;
console.oldLog = console.log;
console.log = function(str) {
	console.oldLog(str);
	lastLog = str;
}
 
console.log('1234567');
console.log(lastLog); // 1234567
```

