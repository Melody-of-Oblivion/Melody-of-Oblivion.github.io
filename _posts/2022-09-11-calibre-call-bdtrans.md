---
title: Calibre调用网页版百度翻译
---

Calibre选择文本后的菜单栏

![p1](https://raw.githubusercontent.com/Melody-of-Oblivion/MoOpics/main/images/posts/calibre-call-bdtrans/1.png)

用到第2、4个按钮

**第2个**

点击后右侧弹出窗口，点击下方 `+添加资源`，点 `+添加`

填写名称，URL输入：

```
https://fanyi.baidu.com/#jp/zh/{word}
```

![p2](https://raw.githubusercontent.com/Melody-of-Oblivion/MoOpics/main/images/posts/calibre-call-bdtrans/2.png)

确定保存。

#jp/zh对应源语言和目标语言，其他语言翻译的URL去网页版百度翻译获取。

​    

**第4个**

右键界面，点击 `首选项` → `选择行为设置`

上方的URL改为：

```
https://fanyi.baidu.com/#jp/zh/{q}
```

![p3](https://raw.githubusercontent.com/Melody-of-Oblivion/MoOpics/main/images/posts/calibre-call-bdtrans/3.png)

设置完后，选择文本，点击第四个按钮，会在浏览器弹出新的窗口。