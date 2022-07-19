---
title: 小甲鱼零基础Py学习记录
editdate: 2022-07-19
---



> 精简记录视频的内容，详细文字内容在论坛

视频地址：https://www.bilibili.com/video/BV1c4411e77t

Py官网：https://www.python.org/

PyPI：https://pypi.org/

小甲鱼的FishC论坛：https://fishc.com.cn/ （需要注册）

# P2

IDLE分交互模式和编辑器模式

IDLE交互模式输入

```python
import this
```

会输出 “The Zen of Python”

# P3

File -> New File 打开编辑器模式

祖传猜数字老游戏：

```python
""" 祖传猜数字老游戏 """

temp = input()
guess = int(temp)

if guess == 8:
    print('√')
else:
    print('×')

print('游戏结束')
```

保存后F5直接运行

注意检查英文标点、tab缩进、函数拼写

PEP8编码风格指南：[原文](https://peps.python.org/pep-0008/) [FishC汉化版](https://fishc.com.cn/thread-139746-1-1.html)



**BIF** (Built-in Functions，内置函数)

IDLE交互模式输入

```python
dir(__builtins__)
```

可以查看Python所有内置函数

# P4 & P5

## **变量** (variable)

```python
x = 3
```

**=** 进行赋值操作，x为变量名，直接用变量名进行访问，如

```python
print(x) # 3
```

变量的值取决于最后一次赋值。

（1）变量名不能以数字开头
（2）变量名区分大小写
（3）变量名可以用汉字



不同变量的值可以传递

```python
x = 3
y = 5
y = x
print(y) # 3
x = y = 3
print(x, y) # 3 3
```



交换两个变量的值

```python
# 传统
x = 5
y = 3
z = x # 中间变量
x = y
y = z
print(x, y) # 3 5

# Py
x = 5
y = 3
x, y = y, x
print(x, y) # 3 5
```

## 字符串 (string)

用单引号('')和双引号("")括起，三个引号对长字符串 (single/double/triple quoted)

IDLE交互模式按 `Alt + P` 上一句

反斜杠 (\\) 转义

## 原始字符串 (raw strings)

```python
x = r'D:\111\222' # r -> raw
```

一对引号打印多行字符串

```python
print('1111\n\
1111\n\
1111') # 换行符后再加一个\
```

长字符串打印

```python
print('''1111
1111
1111''')
```

## 字符串加法乘法

**+** 拼接字符串，***** 重复字符串

```python
'520' + '1314' # 5201314
'520\n' * 3000 # 520 x3000行
```

# P6

条件分支语句

```python
if x == 1:
    pass
elif x == 2:
    pass
else:
    pass
```

比较运算符：

| >    | 大于     |
| ---- | -------- |
| >=   | 大于等于 |
| <    | 小于     |
| <=   | 小于等于 |
| ==   | 等于     |
| !=   | 不等于   |

返回 True/False

# P7 & P8

改进祖传老游戏

```python
""" 改进祖传猜数字老游戏 """
import random

counts = 3 # 次数
answer = random.randint(1, 10)

while counts > 0:
    temp = input()
    guess = int(temp)

    if guess == answer:
        print('√')
        break
    elif guess > answer:
        print('大了')
    else:
        print('小了')
    
    counts -= 1

print('游戏结束')
```

IDLE按F1可以打开英文文档

**重现伪随机数**

```python
import random

c = 5
x = random.getstate() # 获取生成器状态
while c > 0:
    print(random.randint(1, 10))
    c -= 1

c = 5
random.setstate(x)
while c > 0:
    print(random.randint(1, 10))
    c -= 1
```

# P9 & P10

数字类型：整数 (integers)、浮点数 (floating point numbers)、复数 (complex numbers)

由于采用IEEE754标准存储浮点数，浮点数计算会存在误差。

```python
0.3 == 0.1 + 0.2 # False
0.3 < 0.1 + 0.2 # True 0.300000....0004
```

```python
import decimal
a = decimal.Decimal('0.1')
b = decimal.Decimal('0.2')
a + b # 0.3
c = decimal.Decimal('0.3')
c == a + b # True
```

E计法 (科学计数法)

```python
0.00005 # 5e-05 5*10^-5
```

```python
# 复数
x = 1 + 2j # 实部虚部通过浮点数存储
x.real # 1.0
x.imag # 2.0
```

​    

x // y：*地板除，除法的结果向下取整，取比结果小的整数*

```python
3 // 2 # 1
-3 // 2 # -2
```

x % y：*求余数*

**x == (x // y) * y + (x % y)**

|     abs(x)      |    x的绝对值，复数返回模    |
| :-------------: | :-------------------------: |
|     int(x)      | 将x转换为整数，截去小数部分 |
|    float(x)     |       将x转换为浮点数       |
| complex(re, im) |        返回一个复数         |
|  c.conjugate()  |       返回c的共轭复数       |
|  divmod(x, y)   |     返回(x // y, x % y)     |
|    pow(x, y)    |        计算x的y次方         |
|     x ** y      |        计算x的y次方         |

pow(x, y, z)：*求x的y次方除z的余数*

```python
pow(2, 3, 5) # 3
2 ** 3 % 5 # 3
```

# P11 & P12

## 布尔类型

bool()

结果为**False**的情况：

- 定义为False的对象：None和False
- 值为0的数字类型：0, 0.0, 0j, Decimal(0), Fraction(0, 1)
- 空的序列和集合：'', (), [], {}, set(), range(0)

```python
1 == True
0 == False
True + False # 1
True - False # 1
True * False # 0
True / False # 报错，除数不能为0
```

**布尔类型就是特殊的整数类型**

## 逻辑运算符

逻辑运算也叫布尔运算

与或非 and, or, not

支持**真值测试**

```python
3 and 4 # 4, 都非0时返回后一个非0值
4 or 5 # 4, 都非0时返回第一个非0值
```

## 短路逻辑 (short-circuit logic)

```python
(not 1) or (0 and 1) or (3 and 4) or (5 and 6) or (7 and 8 and 9) # 4
0 or 0 or 4 or 6 or 9 # 0 or 4 -> 4, 4 or 6 or 9不运算
```

从左往右，第一个操作数的值无法确定逻辑运算的结果才对第二个操作数进行求值

## 运算符优先级

```python
not 1 or 0 and 1 or 3 and 4 or 5 and 6 or 7 and 8 and 9 # 4
# 0 or 0 or 4 or 6 or 9
```

not > and > or

算术运算 > 比较运算 > 逻辑运算

# P15

## 分支语句

```python
if condition:
    pass
elif condition:
    pass
else:
    pass
```

