---
title: 移除B站直播部分分区打码
---

油猴实现：

```javascript
// ==UserScript==
// @name       隐藏B站直播部分分区模糊
// @namespace  http://tampermonkey.net/
// @version    
// @description 
// @author     
// @match      https://live.bilibili.com/*
// @grant      GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        div.web-player-module-area-mask {
            opacity: 0;
        }
    `);
})();
```

​    

Stylus实现：

```css
/* ==UserStyle==
@name           隐藏B站直播部分分区模糊
@namespace      https://github.com/
@version        
@description    
@license        MIT
@author         
==/UserStyle== */

@-moz-document domain("live.bilibili.com") {
    div.web-player-module-area-mask {
        opacity: 0;
    }
}
```

​    

> 使用 display: none; 会提示“检测到违规操作”