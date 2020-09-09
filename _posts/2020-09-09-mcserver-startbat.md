---
title: mc优化开服bat参考
---

> 转自mcbbs，优化过的bat，Java8适用

32位参考：

```powershell
java -Xincgc -Xmx最大内存M -Xms最小内存M -Xss512K -XX:+AggressiveOpts -XX:+UseFastAccessorMethods -XX:ParallelGCThreads=4 -XX:+UseConcMarkSweepGC -XX:CMSFullGCsBeforeCompaction=2 -XX:CMSInitiatingOccupancyFraction=70 -XX:-DisableExplicitGC -XX:TargetSurvivorRatio=90 -jar 服务端核心.jar
```

64位参考：

```powershell
java -server -Xincgc -Xmx最大内存M -Xms最小内存M -Xss512K -XX:+AggressiveOpts -XX:+UseCompressedOops -XX:+UseCMSCompactAtFullCollection -XX:+UseFastAccessorMethods -XX:ParallelGCThreads=4 -XX:+UseConcMarkSweepGC -XX:CMSFullGCsBeforeCompaction=2 -XX:CMSInitiatingOccupancyFraction=70 -XX:-DisableExplicitGC -XX:TargetSurvivorRatio=90 -jar 服务端核心.jar
```

将代码修改好复制到新建的 `.bat` 文件里并放到与服务端核心相同的路径下即可。