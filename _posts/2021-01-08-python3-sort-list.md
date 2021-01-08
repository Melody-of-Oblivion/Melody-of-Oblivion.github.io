---
title: Python|使用lambda表达式排序列表
---

> 用list排序时碰到，就简单讲讲。

# Lambda表达式的一般用法

lambda表达式语法：

```python
lambda argument:expression
```

```python
sum = lambda x, y: x + y
print(sum(1, 2))
# 输出为3
```

# Lambda表达式在list排序中使用

python list的排序用到**sort()**方法：

```python
list.sort(cmp=None, key=None, reverse=False)
```

cmp是可选参数，指定了该参数会使用该参数的方法进行排序；key是用来进行比较的元素，取自于可迭代对象中；reverse就是是否倒序排列。

Lambda表达式用到的是**key**。

​    

以我碰到的情况为例，图片文件名为类似 `1_xxxxx.jpg` 这种情况，1是递增的序号，xxxx是会变化的有规律数字或者字符串（反正就是没用的东西），在本地Windows下排序能按正常的 *1 2 3 4...* 顺序排列，而python中list却得到 *1 10 11 12...* 这样的排序，与我的需要不符。

```python
List.sort(key = lambda x:int(x.split('_')[0]))
```

上面是用sort() + lambda解决的办法。

将key值设为一个lambda表达式，参数是 **x**（传入的文件名），表达式是 **int(x.split('_')[0])** ，就是split分割后获得文件的序号作为key值进行比较，之后列表就会按序号的数字大小排序了。