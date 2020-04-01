---
title: "重装系统"
editdate: "2020-01-16"
---

▋<u>索引</u>：

\> <a href="#1">准备</a>

\> <a href="#2">方法1</a>

\> <a href="#3">方法2</a>

\> <a href="#4">Windows激活</a>

------

<a name="1">→</a> **准备：**

1. 一个U盘（存储大小按存多少东西决定）
2. 系统光盘映像文件（ISO文件，Windows的iso文件可以去[这里](https://msdn.itellyou.cn/)下载）
3. BISO启动按键（可以参考这个[表格](https://img-blog.csdnimg.cn/20190328221024192.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTIzMjExOTk=,size_16,color_FFFFFF,t_70)或者去[这里](https://www.laomaotao.net/quickquery/)查一查）

------

<a name="2">→</a> **方法1(简单)：**

1. 先下载个[老毛桃](https://www.laomaotao.net/)并安装 （或者[大白菜](http://www.winbaicai.com/)什么的，应该差不多，以下以老毛桃为例）
2. 插入U盘（这里注意：如果U盘存了别的东西，要先转移出来，制作的时候会格式化U盘的）
3. 打开老毛桃，有个UEFI启动盘制作，制作的U盘选到自己的U盘（个性设置能自己修改一些东西）
4. 点击制作启动盘，等待完成，用启动模拟可以看启动的情况
5. U盘的图标会变，打开U盘，查看隐藏的文件可以把那个图标删除掉（U盘的名字可以右键U盘修改）
6. 完成后，U盘里会多出
7. 一些东西，可以把下载好的iso文件放到出现的ISO文件夹里（为了方便而已），然后可以把要存U盘里的东西再转移进去了
8. （这时候U盘已经是一个启动盘了）插到一台机子上，开机并狂按BIOS键进入BIOS界面，然后按照界面的提示操作，从U盘启动。打开后会进入那个选择的界面，选Win PE的然后等进去就行了（这些操作都是用键盘）
9. Win PE里带了很多工具，有硬盘工具可以进行一些硬盘操作（Win PE里可以用鼠标了），硬盘只有一个系统盘的可以在这时候分一下区（Windows的分区正常都是格式化为NTFS格式的）
10. 有一个老毛桃图标的装系统软件，打开在iso文件那里选到U盘中的对应iso文件，选好需要的版本，点底下开始就行了，然后就是等，它会自动格式化系统盘什么的，完事之后会提示重启，或者10秒未选择后会自动重启（如果还有什么有用的东西在系统盘里，这一步开始前就要先转移到U盘里）
11. 重启之后从硬盘打开就开始系统引导了，按步骤走就行了（笔记本都是用的OEM版系统，不知道MSDN版系统能不能用）
12. **注：** 有些大佬说这些启动盘制作工具是带有virus的，但是为了方便就这样没办法了，进入系统后会多出一大堆垃圾软件，手动卸载就好了（一定要**卸载**哦），用这种方法搞，进系统带驱动了可以直接联网，这也是方便的一点吧



![lmt.png](https://i.loli.net/2020/01/11/3mrJTsen2BiUMdL.png)

------

<a name="3">→</a> **方法2：**

1. 下个[UNetbootin](http://unetbootin.github.io/)
2. 选中**光盘映像**并选择iso文件所在路径，下面**驱动器**选择U盘对应的盘符，然后确定，等做完就行了（上面**发行版**的都是Linux类系统）
3. 重启，在BIOS从U盘打开就会进入系统的引导
4. **注：** Linux系统的硬盘是格式化为ext4格式，重装回Windows时要格式化回NTFS格式并激活
5. 安利一手[deepin(深度)](https://www.deepin.org/download/)系统



![unbi.png](https://i.loli.net/2020/01/11/h9T38izmy76RvLV.png)

------

<a name="4">→</a> **Windows激活：**

命令（右键命令提示符以管理员身份运行）：<u>slmgr /skms kms.v0v.bid && slmgr /ato</u>

[Win10 HWIDGen](https://pan.baidu.com/s/1ZolJ3ZF0VKR-vCQdyOR2bA)

[Win10数字权利激活工具批处理版](https://pan.baidu.com/s/1wN7fXtPGm7KFceVW18ntkA)

[HEU KMS Activator](https://pan.baidu.com/s/1dHjf5ux) (zbvx)

[暴风激活](http://www.baofengjihuo.com/)