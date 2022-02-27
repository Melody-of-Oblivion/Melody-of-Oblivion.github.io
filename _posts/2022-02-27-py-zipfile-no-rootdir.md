---
title: Python使用zipfile无根目录打包
---

```python
zip = zipfile.ZipFile('example.zip', 'w', zipfile.ZIP_DEFLATED)
for parent, dirnames, filenames in os.walk('folder'): # os.walk遍历folder文件夹的子文件
    no_root = parent.replace('folder', '') # 去除根路径
    for file in filenames:
        # os.path.join(parent, file) 带根路径的文件路径
        # os.path.join(no_root, file) 去除了根路径的文件路径
        zip.write(os.path.join(parent, file), os.path.join(no_root, file))
zip.close()
```

