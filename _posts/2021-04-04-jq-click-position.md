---
title: JQ获取点击位置
---

```javascript
$(function(){
    $(document).click(function(event){
        console.log(event.pageX + ' ' + event.pageY);
    })
})
```

