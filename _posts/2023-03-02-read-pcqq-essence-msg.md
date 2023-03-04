---
title: PCQQ查看精华消息
editdate: 2023-03-04
---

PCQQ精华消息的入口可以在消息记录搜索“精华消息”，点击 `xxx的消息被设为精华消息` 的 **精华消息** 来打开QQ精华消息的弹窗。

有时候会遇到嵌套一个精华消息的情况：

![1](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/read-pcqq-essence-msg/1.webp)

点击会调用浏览器打开网页，如果遇到了这种情况：

![2](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/read-pcqq-essence-msg/2.webp)

没有显示内容，可以打开 [QQ群](https://qun.qq.com/member.html) 登录自己的账号之后再刷新精华消息的网页，就能够正常看到内容了。

----

另一个查看的方法是在浏览器地址栏输入

```
https://qun.qq.com/essence/indexPc?gc=群号
```

同样需要在[QQ群](https://qun.qq.com/member.html) 登录自己的账号之后才能正常看到内容。

但是遇到嵌套精华消息等的情况时，直接通过鼠标点击并不会弹出新标签页，此时可以通过油猴脚本来解决：

```javascript
// ==UserScript==
// @name         pcqq-essence-msg-fix
// @namespace    https://github.com/
// @version      0.1.0
// @description  修复浏览器中查看QQ精华消息窗口时点击嵌套的精华消息窗口未弹出新标签页的问题。
// @author       monSteRhhe
// @match        https://qun.qq.com/essence/indexPc?gc=*
// @icon         https://qun.qq.com/favicon.ico
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.3/cash.min.js
// @run-at       document-start
// ==/UserScript==
/* globals $, waitForKeyElements */

(function() {
    'use strict';

    let logStr;
    let logArr = [];
    console.oldLog = console.log;
    console.log = function(str) {
        console.oldLog(str);
        logArr.push(str);
    }

    $(document).on('click', '.doc_wrap', function() {
        for(var i = 0; i < logArr.length; i++) {
            if(logArr[i].indexOf('https://qun.qq.com/essence/share?') != -1
                || logArr[i].indexOf('https://b23.tv/') != -1) {
                logStr = logArr[i];
            }
        }
        window.open(logStr, '_blank');
        logArr = [];
    });
})();
```

添加脚本刷新网页后，左下标识 **“群精华消息”**(`https://qun.qq.com/`) 或 **“哔哩哔哩”**(`https://b23.tv/`) 的精华消息就能直接点击在新标签页打开了。如果有其他的也能在js代码中再添加。

