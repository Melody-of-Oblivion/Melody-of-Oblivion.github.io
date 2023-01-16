---
title: ffmpeg合并多个mp4
---

在需要合并的mp4的位置打开cmd

新建 `video.txt` 文件，写入要合并的文件名

```
file '1.mp4'
file '2.mp4'
....
```

在cmd中输入

```
ffmpeg -f concat -i video.txt -c copy concat.mp4
```

运行后会将txt中需要合并的mp4都合并为 `concat.mp4`