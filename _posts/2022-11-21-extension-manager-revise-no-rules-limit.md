---
title: Extension Manager扩展取消规则数量上限
---

Extension Manager好像有[黑历史](https://www.landiannews.com/archives/89421.html)来着，但是个人感觉固定分组+规则还是挺好用的，就是规则数量有限制10条。

而另一个扩展管理器二管家也有规则的功能，就是好像没有像EM那样的固定分组的功能，也可以考虑用二管家来配合EM的固定分组来使用更多规则。

[Extension Manager - Chrome应用商店](https://chrome.google.com/webstore/detail/extension-manager/gjldcdngmdknpinoemndlidpcabkggco)

[二管家 - Chrome应用商店](https://chrome.google.com/webstore/detail/nooboss/aajodjghehmlpahhboidcpfjcncmcklf)

~~如果有更完美的替代品就更好啦。~~

​    

EM修改方法见下方：

版本9.5.1

找到 `option.js` 文件

搜索 **ruleMaxNum**

删除

```javascript
if(this.rules.list&&this.rules.list.length>=10)return void window.alert(n.i18n.ruleMaxNum+"10");
```

将修改过文件的整个扩展文件夹以开发者模式加载到浏览器（直接修改安装的文件显示损坏），

到设置页面正常设置分组、新增规则即可。

修改后的成品[下载](https://wwz.lanzouy.com/iU5P60ght68h)，解压即用。

试用体验一段时间先
