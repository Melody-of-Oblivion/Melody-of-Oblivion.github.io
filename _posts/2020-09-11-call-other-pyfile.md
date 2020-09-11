---
title: py文件中调用另外的py文件
---

# py中执行另一个py文件

```python
execfile('example.py')
# 或者
import os
os.system('example.py')
```

# py中调用另一个py文件中的类和函数

## 同一文件夹下

### 调用函数：

```python
# A.py
def a(x):
    print(x)
```

```python
# B.py
import A
A.a(1)
# 或者
from A import a
a(1)
```

### 调用类：

```python
# A.py
class A:
    def __init__(self,xx,yy):
        self.x=xx
        self.y=yy
    def add(self):
        print("x和y的和为：%d"%(self.x+self.y))
```

```python
# B.py
import A
a=A.A(2,3)
a.add()
```

## 不同文件夹下

A.py 文件的文件路径：`E:\Py\example`

```python
# B.py
import sys
sys.path.append(r'E:\Py\example')
'''
python import模块时， 是在sys.path里按顺序查找的。
sys.path是一个列表，里面以字符串的形式存储了许多路径。
使用A.py文件中的函数需要先将他的文件路径放到sys.path中
'''
import A

a=A.A(2,3)
a.add()
```

