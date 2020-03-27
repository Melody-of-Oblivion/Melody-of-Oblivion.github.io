---
titlt: "简单mc联机/开服教程"
---

——学会这个，告别 **lj 网易**

准备：电脑， JRE（Java运行环境）， Minecraft（正盗版随意）

---

### 一 游戏安装

正版去 [官网](https://www.minecraft.net/) 下载启动器什么的；盗版推荐 [HTML启动器](https://hmcl.huangyuhui.net/download)（[度盘分流](https://pan.baidu.com/s/1ggh0gfD)），这是一个功能非常完善的启动器，支持全版本下载，多账户，版本独立，安装Forge/Liteloader/Fabric/Optifine。

<img src="https://i.loli.net/2020/03/27/wiQmVjl6UouK9ch.png" alt="launcher.png" style="zoom: 67%;" />

启动器设置中可以调整下载源，推荐优先`我的世界中文论坛源`，然后到`游戏列表`按需安装游戏版本。

---

### 二 联机

一般那些房主开房间别人才能进，房主一退就全关的就是 <u>虚拟局域网联机</u> 了。

虚拟局域网联机，除了上面的准备，还需要 **虚拟局域网软件**。

虚拟局域网软件目前可以用 ①[Hamachi]()（官网和注册要翻GFW，比较麻烦） ②[Radmin VPN](https://www.mcbbs.net/thread-925239-1-1.html)（官网要翻GFW，这里是mcbbs的介绍帖，未测试）

虚拟局域网软件如何创建、加入房间这里不作介绍。

联机时，房间里的所有人都要用一样的端（版本，Forge，mod什么的都要相同），房主从单人的存档进入游戏，在 <u>Esc</u> 打开 `对虚拟局域网开放`，确定后其他玩家可以在多人游戏中直接连接。IP就是房主在虚拟局域网的IP，端口是对虚拟局域网开放后得到的端口。

综上，直接虚拟局域网联机的**优点：简单方便；缺点：每次都要换端口，不能添加服务器插件**。

---

### 三 服务器

服务器相对直接联机会麻烦一点。

开一个服务器，除了准备里需要的，还要选一个适合的 [服务端](https://www.mcbbs.net/thread-661632-1-1.html)，虚拟局域网软件或者云服务器（技术力够可以用自己电脑开）。

开启服务器要自己写个bat启动脚本，比如：

```
@echo off
java -Xmx最大内存G -Xms最小内存G -server -jar 服务端名字.jar
pause
```

大佬给出的优化版启动脚本：

```
@echo off
java -server -Xincgc -Xmx最大内存M -Xms最小内存M -Xss512K -XX:+AggressiveOpts -XX:+UseCompressedOops -XX:+UseCMSCompactAtFullCollection -XX:+UseFastAccessorMethods -XX:ParallelGCThreads=5 -XX:+UseConcMarkSweepGC -XX:CMSFullGCsBeforeCompaction=2 -XX:CMSInitiatingOccupancyFraction=70 -XX:-DisableExplicitGC -XX:TargetSurvivorRatio=90 -jar 服务端名字.jar
pause
```

新建一个文件夹，放入服务端和bat脚本，双击bat打开服务器（有的服务端能自己下载Libraries，有的需要自己另外下），具体的开服操作这里不详细讲了，集体可以看[这里](https://www.mcbbs.net/thread-916822-1-1.html)，服务端优化的方法也能在这里找到。

服务器开启后要修改server.properties文件，具体的设置可见[这里](https://minecraft-zh.gamepedia.com/index.php?title=Server.properties&variant=zh)，修改完重启服务器生效。

**注意：**用云服务器开服，server.properties中的server-ip填服务器的IP，server-port填服务器给的；如果是虚拟局域网开服，server-ip填房主的IP，server-port随便填（但是要在port的范围内）

安排好后，玩家（包括房主）就可以在多人游戏里添加服务器，IP和端口同上（云服务器的IP看情况），服务器开启完毕后就可以加入了，而且房主退出游戏后，只要服务器没关，其他人就可以照常玩耍。

综上，开服的**优点：不一定要房主在游戏，支持插件，部分服务端有优化，端口不变；缺点：云服务器要花钱租，配置服务端要花一些精力**

---

#### 四 最后

网易是真滴 lj，有需要还是多去看看[mcbbs](https://www.mcbbs.net/forum.php)，这比 lj 网易强多了，有兴趣可以多去看看。

