---
title: Python3打开选择文件窗口
editdate: 2020-09-12
---

```python
# 代码仅供参考
import tkinter as tk
from tkinter import filedialog

root = tk.Tk()
root.withdraw() #隐藏root窗口

#选择文件夹
Folderpath = filedialog.askdirectory()
print('Folderpath:', Folderpath)

#选择单个文件
Filepath = filedialog.askopenfilename() 
print('Filepath:', Filepath)

#选择多个文件
Filespath = filedialog.askopenfilenames() 
print('Filespath:', Filespath)
```

