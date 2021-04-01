---
title: JS按键显示内容
---

案例用的网页内容：

```html
<span id="test" style="display: none;">balabalabalabalabalabalabala</span>
```

JS写法参考：

```javascript
let keyarr = [];
let matcharr = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 66, 65]; // 上上下下左右左右BABA

window.onkeydown = function(){
    keyarr.push(window.event.keyCode);

    // 按空格清空数组
    if(window.event.keyCode == 32){
        keyarr.length = 0;
    }

    console.log(keyarr);
    if(keyarr.length == 12){
        var i = 0;
        while(i < 12){
            if(keyarr[i] == matcharr[i]){
                if(i == 11){
                    var tar = document.getElementById('test');
                    tar.setAttribute('style', 'display: ;');
                }
                i++;
            }
            else{
                break;
            }
        }
        keyarr.length = 0;
    }
}
```

