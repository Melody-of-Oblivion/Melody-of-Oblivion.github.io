---
title: 批量保存QQ群的图片
---

> 定时清理QQ数据，节省硬盘空间。

有的时候可能会碰到需要保存Q群合并转发的图片的时候（类似情况），而想要保存的图片量又比较大，这种时候一张一张右键另存为无疑工作量大，很麻烦。

以群合并转发的图片为例，打开合并转发，开始加载里面的图片，等图片都加载完之后，右键旁边空白区域点击 `全部选择`，就会选中全部合并转发内部的图片，这时只要 `Ctrl C` + `Ctrl V` 到其他地方就行了。

而其他群里或者个人聊天的图片，可以选中然后用某Q自带的批量下载解决。

以上操作保存的图片名是乱序的字符，文件后缀也不会改变，而是按图片原来的后缀保存，图片排序也不一定会按转发的顺序来排序。

------

其实QQ接收到的图片加载完就会存储到本地的目录，上面讲的方法其实就是直接**复制**需要的图片出来，另存为就是换个后缀。

位置就是那个安装时都会提醒你的那个所谓个人**数据**的存储路径

默认是在 `文档` 下，修改过位置的同理。

进入 `Tencent Files/QQ号/Image`，里面 `C2C` 应该是存储的个人聊天时接收的图片；而 `Group2` 

是存储群聊收到的图片的。（都是等加载完）

个人聊天图片的文件夹里图片**没有**分文件夹；而群聊图片文件夹里分了很多文件夹，按时间从新到旧排序，最新的多个文件夹就是新接收到的图片，但是文件夹内部<u>还会有多个文件夹</u>，下面讲解。

以上面讲的合并转发的图片为例（**理论**），打开合并转发等图片全部加载完，Group2文件夹里就会多出新的多个文件夹，按时间从新到旧排序，打开最新的文件夹，里面的几个文件夹中能找到一个，里面有合并转发最底下的一张图，以此类推，Group2文件夹从新到旧的N个文件夹里存了N张合并转发的图，而每个文件夹里只有一个文件夹内存了正确的图片。

上面这个就是QQ图片存储的简单规律，mad 没事加没用的图也不知道干什么。之前说过的闪照也是类似的，只能说可能这就是TX的**风格吧。

