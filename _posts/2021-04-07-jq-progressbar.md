---
title: JQ写网页浏览进度条
editdate: 2021-07-08
---

> 仅供参考。

html部分：

```html
<div class="progressbar"></div>
```

css部分：

```css
// 顶部进度条，根据情况修改
.progressbar {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 5;
    width: 0;
    height: 5px;
    background-color: #777;
}
```

js部分：

```javascript
// 用到JQ
function progbar(){
    var st = $(window).scrollTop(); // 距顶部距离
    var cr = $(window).height(); // 窗口高度
    var to = $(document.body).height(); // 总高度

    var percent = (st + cr) / to;
    if(percent > 1){percent = 1;}
    percent = (percent * 100) + '%'; // 计算百分比

    $('.progressbar').attr('style', 'width: ' + percent + ';');
}

$(document).ready(function(){progbar();}) // 网页加载时
$(document).scroll(function(){progbar();}) // 网页滚动时
```

