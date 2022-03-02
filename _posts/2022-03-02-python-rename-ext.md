---
title: Python恢复文件扩展名
---

安装 `filetype`：

```
pip install filetype
```

参考代码：

```python
import filetype
import sys
import os

def reExt(p):
    with open(p, 'rb') as f:
        kind = filetype.guess(f)

    os.rename(p, os.path.splitext(p)[0] + '.' + kind.extension)

if __name__ == '__main__':
    paths = sys.argv[1:]

    for p in paths:
        reExt(p)
```

