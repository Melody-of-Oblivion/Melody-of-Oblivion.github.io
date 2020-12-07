---
title: 关于FFmpeg
---

# 介绍

FFmpeg是一套可以用来记录、转换数字音频、视频，并能将其转化为流的开源计算机程序。采用LGPL或GPL许可证。它提供了录制、转换以及流化音视频的完整解决方案。它包含了非常先进的音频/视频编解码库libavcodec，为了保证高可移植性和编解码质量，libavcodec里很多code都是从头开发的。

多媒体视频处理工具FFmpeg有非常强大的功能，包括视频采集功能、视频格式转换、视频抓图、给视频加水印等。

# 项目组成

**libavformat**：用于各种音视频封装格式的生成和解析，包括获取解码所需信息以生成解码上下文结构

和读取音视频帧等功能；

**libavcodec**：用于各种类型声音/图像编解码；

**libavutil**：包含一些公共的工具函数；

**libswscale**：用于视频场景比例缩放、色彩映射转换；

**libpostproc**：用于后期效果处理；

**ffmpeg**：该项目提供的一个工具，可用于格式转换、解码或电视卡即时编码等；

**ffsever**：一个 HTTP 多媒体即时广播串流服务器；

**ffplay**：是一个简单的播放器，使用ffmpeg 库解析和解码，通过SDL显示；

> 以上摘自[百度百科](https://baike.baidu.com/item/ffmpeg/2665727)。

​    

官网：[FFmpeg](http://ffmpeg.org/)

使用方法可以参考官方文档。

> 之后有空去试试。