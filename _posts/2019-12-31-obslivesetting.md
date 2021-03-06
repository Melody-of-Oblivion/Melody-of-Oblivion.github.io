---
title: OBS直播设置
editdate: 2020-06-27
---

OBS (Open Broadcast Studio) 是一个自由、开源的视频录制与直播软件。可以从[这里](https://obsproject.com/)下载。

主界面：

<img src="https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/OBSset/主界面.png" alt="主界面"  />

首先打开OBS后，点击`文件`，打开`设置`，选择`推流`选项卡：

<img src="https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/OBSset/推流.png" alt="推流"  />

然后这里以**B站直播**为例，设置一下OBS的**流媒体设置**：

打开B站`我的直播间`——`开播设置`，选择`开始直播`之后，可以看到`你的rtmp地址`和`你的直播码`，接下来在OBS里`推流`的`服务`设置里面选择`自定义...`，并按顺序把这两个地址填进去。

（因为我没直播过，所以这里并没有演示的图）![naotou](https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/emoji/naotou.gif)

下面来看看怎么样来调试一个合适的**直播参数**：

选择`输出`选项卡，输出模式选择为`高级`，你会看到这样的界面：

<img src="https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/OBSset/输出.png" alt="输出"  />

在这里的设置决定的是你直播时候的视频质量。

首先，编码器里面，可以看到有 <u>NVIDIA NVENC H.264</u>、<u>QuickSync H.264</u>、<u>X264</u> 这几个选项，分别对应<u>N卡GPU加速</u>、<u>Intel核显加速</u>和<u>CPU压制</u>三种方式。如果是A卡，也可以选择AMD的GPU加速。

从质量来说，最好的肯定是CPU压制，下来是核显，最次是独显的编码器。

但是这里有个问题，如果你想要直播游戏的话，不管用什么CPU，只要用CPU来编码，就会影响游戏体验，可能帧数没有下去很多，但帧生成时间会产生波动，变得不稳定，也就是游戏会有点卡顿，这个时候要么选择核显/独显编码，要么就是用采集卡在另一台机器推流，但受限于大多数人的预算，我们只讨论前者。因此下面我们以N卡的编码器为例，讲讲**参数的设置**。

- **视频推流部分：**一般来说，因为各位的网速都不是对等网络，为了保证直播的稳定性，码率控制推荐选择CBR；接下来一个需要注意的是“预设”，对于现今的显卡来说，一般往质量高的选；接下来的`配置(Profile)`选择high会有最好的效果。
- **音频设置部分：**如果想直播唱歌，那建议选<u>256以上</u>的比特率；如果是直播游戏，一般<u>160-192左右</u>足够了。

<img src="https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/OBSset/音频.png" alt="音频"  />

最后一个值得说的是`视频`选项卡：

<img src="https://cdn.jsdelivr.net/gh/Melody-of-Oblivion/MoOpics@main/images/posts/OBSset/视频.png" alt="视频"  />

在这个里面，我们可以选择采集的分辨率、输出的分辨率以及直播时候的FPS值，建议游戏直播还是选择**60以上的FPS**，这样会流畅很多，而一般直播聊天的话**30FPS**就足够了。

​    

------

