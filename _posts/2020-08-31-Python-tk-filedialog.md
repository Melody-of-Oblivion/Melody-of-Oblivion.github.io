---
title: Python打开选择文件窗口
---

```python
# 代码仅供参考
import tkinter as tk
from tkinter import filedialog

root = tk.Tk()
root.withdraw()

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

