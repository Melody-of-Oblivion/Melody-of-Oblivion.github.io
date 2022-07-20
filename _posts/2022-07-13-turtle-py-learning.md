---
title: 小甲鱼零基础Py学习记录
editdate: 2022-07-20
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

# P15~P19

## 分支语句

```python
if condition:
    pass
elif condition:
    pass
else:
    pass
```

```python
# 条件表达式
条件成立执行 if condition else 条件不成立执行

a = 3
b = 5
small = a if a < b else b # 3
```

```python
score = 66
level = ('D' if 0 <= score < 60 else
		'C' if 60 <= score < 80 else
        'B' if 80 <= score < 90 else
        'A' if 90 <= socre < 100 else
        'S' if score == 100 else
        '范围0~100') # 小括号表示多行为一句代码
print(level) # C
```

分支嵌套

## 循环语句

py有 **while** 和 **for** 两种循环语句

```python
while condition:
    statement()
```

### 跳出循环

#### break

**break** 语句退出循环，退出时不会执行break后面的语句

#### continue

跳过本轮循环，条件满足开始下一轮循环

```python
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i) # 1 3 5 7 9
```

> break 和 continue 均只作用于一层循环体

​    

**else**

循环条件不为真时执行（循环结束时执行）

```python
day = 1
while day <= 7:
    answer = input('今天有好好学习吗？')
    if answer != '有':
        break
    day += 1
else:
    print('Bravo!')
```

​    

循环嵌套

```python
# 九九乘法表参考
a = 1
while a <= 9:
    b = 1
    while b <= a:
        if b == a:
            print(str(b) + '×' + str(a) + '=' + str(b * a))
        else:
            print(str(b) + '×' + str(a) + '=' + str(b * a), end = '  ')
        b += 1
    a += 1
```

​    

```python
for 变量 in 可迭代对象:
	statement()
```

```python
sum = 0
for each in range(1, 1000000 + 1): # 左闭右开
    sum += each
print(sum)
```

```python
# range用法
## range(stop)
for i in range(10):
    print(i) # 0 1 2 3 4 5 6 7 8 9
## range(start, stop)
for i in range(5, 10):
    print(i) # 5 6 7 8 9
## range(start, stop, step)
for i in range(1, 10, 2):
    print(i) # 1 3 5 7 9
for i in range(10, 5, -2):
    print(i) # 10 8 6
```

搭配break continue语句，找出10以内的素数

```python
for n in range(2, 10):
    for m in range(2, n): # n == 2时循环会直接结束
        if n % m == 0:
            break
    else:
        print(n, '是一个素数')
```

# P20~P26

[] 创建列表，可以包含不同类型的元素

**序列** 在py中是最常见的数据结构，字符串、列表都是序列

通过**下标索引**访问元素：列表[下标]

访问最后一个元素：列表[**-1**] （逆序访问-1, -2...）

**列表切割**

列表[:3]

列表[3:]

列表[start:stop:step] 对整个列表 start 和 stop 可省略，列表[::step]

倒序输出可以：列表[::-1]

​    

**增删改查**

列表.append() 追加一个对象

列表.extend() 追加一个可迭代对象(必须)

```python
# 切片添加
s = [1, 2, 3, 4, 5]
s[len(s):] = [6]
# s.extend([6])
print(s) # [1, 2, 3, 4, 5, 6]
```

列表插入元素

```python
s = [1, 3, 4, 5]
s.insert(1, 2)
# 插入开头 s.insert(0, x)
# 插入末尾 s.insert(len(s), x)
print(s) # [1, 2, 3, 4, 5]
```

列表删除元素

```python
# 删除已知元素 - remove方法
s = [1, 2, 3, 14, 4]
s.remove(14)
print(s) # [1, 2, 3, 4]
# 删除未知元素 - pop方法
s = [1, 2, 3, 14, 4]
s.pop(3)
print(s) # [1, 2, 3, 4]
# 清空
s.clear()
```

