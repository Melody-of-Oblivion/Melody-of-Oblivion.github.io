---
title: JS字符-ascii码转换
---

字符转ascii码：

```
charCodeAt();
```

ascii码砖字符：

```
String.fromCharCode();
```

Example：

```javascript
var str = 'A';
ascii = str.charCodeAt(); 
str1 = String.fromCharCode(ascii);

console.log(ascii); //65
console.log(str1); //A
```

