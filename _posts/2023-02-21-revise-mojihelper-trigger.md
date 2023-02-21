---
title: 记录修改MOJiDict Helper的触发方式
---

chrome商店的 [MOJiDict Helper](https://chrome.google.com/webstore/detail/mojidict-helper/eknkjedaohafedihakaobhjfaabelkem)

这个扩展是利用「MOJi辞書」的API来查词，目前版本是停留在1.1.0，没有再更新。

原本的触发方式是双击鼠标左键，总感觉用着不是很顺畅，遂决定进行简单的修改。

​    

在扩展页面打开 `开发者模式`，可以看到 MOJiDict Helper 的**ID**是

```
eknkjedaohafedihakaobhjfaabelkem
```

找到同名的扩展文件夹所在位置，把扩展的文件复制一份到新的文件夹，用于修改完成后以开发者模式加载解压缩的扩展文件夹。

打开 `main.js` 文件，可以看出用于触发的代码应该就是底下的：

```javascript
document.addEventListener('dblclick', async () => {
  searchFromSelection()
})
```

dblclick是鼠标的双击事件，从这里开始修改。想太多也搞不来，先定个小目标就是修改成<u>鼠标选取文本后通过键盘按键触发</u>。

​    

先上一段用于判断获取选取的文本的代码：

```javascript
document.addEventListener('mouseup', () => {
    let text = '';
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    if (text.length > 0) {
        console.log(text);
    } else {
        console.log('未获取文本。');
    }
})
```

现在的浏览器应该都是支持 **window.getSelection** 的，简单修改下，用来判断是否选取了文本：

```javascript
document.addEventListener('mouseup', () => {
    if (window.getSelection().toString().length > 0) {
        //...
    }
})
```

加入监听keydown事件：

```javascript
document.addEventListener('mouseup', () => {
  if (window.getSelection().toString().length > 0) {
    document.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.key == 'F' && !e.ctrlKey) {
        //...
      }
    })
  }
})
```

这里按键设置为 `Shift + F` （按下Shift键之后 `f` 键的key会变成大写的 `F`），同理应该也可以修改成其他的按键。

再完善触发的部分：

```javascript
document.addEventListener('mouseup', () => {
  if (window.getSelection().toString().length > 0) {
    document.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.key == 'F' && !e.ctrlKey) {
        let text = window.getSelection().toString();
        if (text.length > 0 && text.indexOf('\n') == -1) {
          searchFromSelection();
        }
      }
    })
  }
})
```

按下组合的按键后会再次获取当前选取的文本内容，当不为空且不包含换行符时触发。

----

使用前先删除原先安装的 MOJiDict Helper，再以开发者模式加载解压缩的扩展。

已经修改并打包好的扩展压缩包：[lanzou](https://wwvc.lanzouy.com/iYxcA0o71yhe)