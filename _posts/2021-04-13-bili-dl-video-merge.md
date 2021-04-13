---
title: B站App缓存视频合并
---

视频缓存地址：`/Android/data/tv.danmaku.bili/download`

`download`文件夹下的纯数字文件名是视频的av号

上py代码（[gist](https://gist.github.com/monSteRhhe/03590057254f97abef3ce4eda68fd3a3)）：

```python
import os
import re
import json
import tkinter as tk
from tkinter import filedialog

# tk filedialog选择文件夹
root = tk.Tk()
root.withdraw() #隐藏窗口

root_dir = os.getcwd()

Folderpath = filedialog.askdirectory(title=u'选择一个文件夹', initialdir=(root_dir))
Folder = Folderpath.split('/')[-1]

# 判断纯数字文件夹名
if(re.match('\d', Folder)):
    # c_开头子文件夹
    for c_ in os.listdir(Folderpath):
        entry = open(Folderpath + '/' + c_ + '/' + 'entry.json', 'r', encoding = 'utf-8')
        entry_ = json.loads(entry.read())
        entry.close()
        video_name = entry_['page_data']['download_subtitle']
        
        # 正则re.sub用-替换文件名非法字符
        video_name = re.sub(r'[\\/:*?"<>|]', '-', video_name)

        video_path = Folder + '/' + c_ + '/' + '64/video.m4s'
        audio_path = Folder + '/' + c_ + '/' + '64/audio.m4s'

        os.system('ffmpeg -i ' + video_path + ' -i ' + audio_path + ' -vcodec copy -acodec copy output.mp4')
        os.rename(r'output.mp4', video_name + '.mp4')
```

已编译的ffmpeg可以在[这里](https://www.gyan.dev/ffmpeg/builds/)找到下载，放到和`.py`同一个路径下即可。