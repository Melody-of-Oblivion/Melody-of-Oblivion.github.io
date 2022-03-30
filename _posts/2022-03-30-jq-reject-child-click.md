---
title: jq禁止子元素相应父元素点击事件
---

参考：

```javascript
$('.classname').click(function(e){
	if (e.target == e.currentTarget){ // 防止父元素覆盖资源的绑定事件操作
		// 执行父元素的事件
	}
});
```

