---
title: 小甲鱼零基础Py学习记录
editdate: 2022-07-27
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

替换

```python
# 下标索引赋值单个替换
s = [1, 2, 3, 44, 5]
s[3] = 4
print(s) # [1, 2, 3, 4, 5]
```

```python
# 切片替换
s = [1, 2, 3542, 44, 554]
s[2:] = [3, 4, 5]
print(s) # [1, 2, 3, 4, 5]
```

替换分两步：

1. 删除 = 左边的内容
2. 在删除的位置插入 = 右边的内容

从小到大排序

```python
s = [3, 1, 9, 6, 8, 3, 5, 3]
s.sort() # [1, 3, 3, 3, 5, 6, 8, 9]
s.reverse() # [9, 8, 6, 5, 3, 3, 3, 1]
```

```python
s = [3, 1, 9, 6, 8, 3, 5, 3]
s.sort(reverse = True) # [9, 8, 6, 5, 3, 3, 3, 1]
```

查找元素数量

```python
s.count(3) # 3
```

查找元素下标索引

```python
s = [3, 1, 9, 6, 8, 3, 5, 3]
s.index(3) # 0，第一个的下标
s.index(3, 1, 7) # 5，(元素, 开始, 结束)
```

列表复制

```python
s_cp1 = s.copy()
s_cp2 = s[:] # [3, 1, 9, 6, 8, 3, 5, 3]
# 这两种方法都是浅拷贝(shallow copy)
```

​    

列表的加乘

```python
s = [1, 2, 3]
t = [4, 5, 6]
s + t # [1, 2, 3, 4, 5, 6]
s * 3 # [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

**嵌套列表** (nested list)

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# 等价
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
```

```python
# 访问嵌套列表
for i in matrix:
    for each in i:
        print(each)
for i in matrix:
    for each in i:
        print(each, end = ' ')
    print()
```

```python
# 下标索引访问
matrix[0] # [1, 2, 3]
matrix[0][0] # 1
```

循环创建嵌套列表

```python
A = [0] * 3
for i in range(3):
    A[i] = [0] * 3
```

```python
# 错误写法
B = [[0] * 3] * 3
# B[1][1] = 1 -> B == [[0, 1, 0], [0, 1, 0], [0, 1, 0]]
```

​    

**is运算符**

```python
x = 'String'
y = 'String'
x is y # True
x = [1, 2, 3]
y = [1, 2, 3]
x is y # False
```

与py的存储机制有关

```python
A[0] is A[1] # False
B[0] is B[1] # True
```

B列表写法只是对单个列表引用，而非物理上拷贝

​    

```python
x = [1, 2, 3]
y = x # 一个变量的赋值传递给另一个变量，称为引用
x[1] = 1
y # [1, 1, 3]
```

需要两个独立的列表就要用拷贝来实现

```python
x = [1, 2, 3]
y = x.copy() # or y = x[:]
x[1] = 1
y # [1, 2, 3]
```

```python
x = [[1, 2, 3], [4, 5, 6]]
y = x.copy()
x[1][1] = 0
y # [[1, 2, 3], [4, 0, 6]]
```

浅拷贝只拷贝表层的列表引用，一样引用的内层的列表

**深拷贝**

```python
import copy
x = [[1, 2, 3], [4, 5, 6]]
y = copy.copy(x) # 浅拷贝
y = copy.deepcopy(x) # 深拷贝
x[1][1] = 0
y # [[1, 2, 3], [4, 5, 6]]
```

深拷贝将引用的子对象一并进行了拷贝

​    

**列表推导式** (list comprehension expression)

例：将列表元素x2

```python
oho = [1, 2, 3, 4, 5]
for i in range(len(oho)):
    oho[i] = oho[i] * 2
print(oho) # [2, 4, 6, 8, 10]
```

列表推导式

```python
oho = [1, 2, 3, 4, 5]
oho = [i * 2 for i in oho] # [2, 4, 6, 8, 10]
```

C语言的列表推导式比Py虚拟机的for循环快

**[expression for target in iterable]**

```python
x = [i for i in range(10)] # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```python
x = [c * 2 for c in 'String'] # ['SS', 'tt', 'rr', 'ii', 'nn', 'gg']
```

```python
# 将字符转换为unicode
x = [ord(c) for c in 'String'] # [83, 116, 114, 105, 110, 103]
```

```python
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
col2 = [row[1] for row in matrix] # [2, 5, 8]
diag = [matrix[i][i] for i in range(len(matrix))] # [1, 5, 9]
diag2 = [matrix[i][len(matrix) - 1 - i] for i in range(len(matrix))] # [3, 5, 7]
```

循环通过迭代来逐个修改列表元素，列表推导式是直接创建新列表，再赋值给变量名。

创建嵌套列表

```py
s = [[0] * 3 for i in range(3)] # [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
```

**[expression for target in iterable if condition]**

```python
even = [i for i in range(10) if i % 2 == 0] # [0, 2, 4, 6, 8]
[i for i in range(10) if i % 2 == 0] # [1, 3, 5, 7, 9]
# 顺序：for => if => expression
```

```python
# 筛选单词
words = ['Pretty', 'Fantastic', 'Excellent', 'Great', 'Fish', 'Brillant']
fword = [word for word in words if word[0] == 'F'] # ['Fantastic', 'Fish']
# fword = [word for word in words if word.startswith('F')]
```

**[expression for target1 in iterable1**

​					**for target2 in iterable2**

​														**...]**

```python
# 展开嵌套列表
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flatten = [col for row in matrix for col in row] # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

外层循环放前，嵌套循环放后

```python
# 笛卡尔乘积
_ = [x + y for x in 'abcd' for y in 'ABCD']
```

_ = [] # 临时或无关紧要的变量

```python
[[x, y] for x in range(10) if x % 2 == 0 for y in range(10) if y % 3 == 0]
```

列表推导式版九九乘法表

```python
[(str(y) + '×' + str(x) + '=' + str(x * y)) for x in range(1, 10) for y in range(1, x + 1)]
```

程序设计原则：KISS (Keep it Simple & Stupid)

# P27

除了字符串和列表，元组也是一个序列

元组像列表可以容纳多种类型对象，也有字符串不可变的特性

列表 - []

元组 = ()

```python
rhyme = (1, 2, 3, 4, 5, '上山打老虎')
rhyme = 1, 2, 3, 4, 5, '上山打老虎'
```

元组也可以通过下标索引获取元素，也支持切片操作

count() index()可用

\+ \* 拼接、重复可用

元组嵌套

```python
s = 1, 2, 3
t = 4, 5, 6
w = s, t # ((1, 2, 3), (4, 5, 6))
```

```python
# 循环迭代
for i in w:
    for each in i:
        print(each)
```

```python
# 列表推导式
[each * 2 for i in w for each in i]
# 没有元组推导式
```

生成单元素元组

```python
x = (520,)
```

**元组的打包和解包**

元组的生成也叫打包

```python
t = (123, 'Fish', 3.14)
x, y, z = t
print(x, y, z) # 123 Fish 3.14，解包
# 解包也适用于其他序列
t = [123, 'Fish', 3.14]
x, y, z = t # 123 Fish 3.14

x, y, z = '一二三' # 一 二 三

a, b, *c = '1234567' # 1 2 ['3', '4', '5', '6', '7']
```

py多重赋值

```python
x, y = 10, 20
# 实现：元组打包解包
_ = (10, 20)
x, y = _
```

元组内的元素不可变，但是元素指向了可变的列表就可变

```python
s = [1, 2, 3]
t = [4, 5, 6]
w = (s, t) # ([1, 2, 3], [4, 5, 6])
w[1][2] = 0 #  ([1, 2, 3], [4, 5, 0])
```

# P28~P33

```python
# 判断回文数
x = '12321'
'是回文数' if x == x[::-1] else '不是回文数' # 是回文数
```

**大小写切换**：

- capitalize()，首字母变大写
- casefold()，全小写
- title()，每个单词首字母大写
- swapcase()，所有字母大小写反转
- upper()，全大写
- lower()，全小写（仅英文）

由于字符串不可变，都是按规则生成一个新字符串

**左中右对齐**：

- center(width, fillchar = '')，居中
- ljust(width, fillchar = '')，左对齐
- rjust(width, fillchar = '')，右对齐
- rfill(width)，左补零

width小于源字符串长度则输出源字符串，fillchar默认空格填充

**查找**：

- count(sub[, start[, end]])，查找sub子字符串在字符串中出现的次数

  ```python
  x = '上海自来水来自海上'
  x.count('海') # 2
  x.count('海', 0, 5) # 1
  ```

- find(sub[, start[, end]])，查找sub子字符串在字符串中的索引下标值，左往右

- rfind(sub[, start[, end]])，右往左

  ```python
  x.find('海') # 1
  x.rfind('海') # 7
  ```

- index(sub[, start[, end]])，与find类似

- rindex(sub[, start[, end]])

  ```python
  x.find('龟') # -1
  x.index('龟') # 抛出异常
  ```

**替换**：

- expandtabs([tabsize=])，将代码中的Tab改为空格

  ```python
  code = '''
  	print('1')
    print('2')'''
  newcode = code.expandtabs(4)
  ```

- replace(old, new, count = -1)，默认count=-1替换全部

- translate(table)，

  ```python
  table = str.maketrans('ABCDEFG', '1234567') # 建立一个转换规则表格将A~G替换为1~7
  'GFEDCBA'.translate(table) # 7654321
  table = str.maketrans('ABCDEFG', '1234567', 'love') # 第三个参数忽略字符串
  'GFEloveDCBA'.translate(table) # 7654321
  ```

**判断** (返回布尔类型)：

- startswith(prefix[, start[, end]])，**[]** 表示可选参数

- endswith(suffix[, start[, end]])

  ```python
  # 元组形式传参
  x = '我爱Python'
  x.startswith(('你', '我', '他')) # True
  ```

- istitle()，判断所有单词是否都是大写开头

  ```python
  x = 'I love'
  x.istitle() # False
  ```

- isupper()，是否全大写

  ```py
  x.isupper() # False
  x.upper().isupper() # True
  ```

- islower()，是否全小写

- isalpha()，是否只由字母构成（空格也False）

- isspace()，是否为空白字符串（空格，tab，\n都是）

- isprintable()，字符串是否都可打印（\转义字符不可打印，会返回False）

- isdecimal()

- isdigit()

- isnumeric()

- isalnum()，isalpha()，isdecimal()，isdigit()，isnumeric()任意一个为True就为True

- isidentifier()，判断字符串是否是一个合法的py标识符（变量名就需要是一个合法的py标识符，不能有空格，不能以数字开头）

判断一个字符串是否为py的保留标识符：

```python
import keyword
keyword.iskeyword('if') # True
```

**截取字符串**：

- strip(chars=None)

- lstrip(chars=None)

- rstrip(chars=None)，定义了chars则按方向去除对应的**单个字符**

  ```python
  'www.i.com'.lstrip('wcom.') # i.com，左边开始单个字符查找是否有对应的删除，没有就判断下一个字符
  ```

- removeprefix(prefix)

- removesuffix(suffix)，移除对应字符串

**拆分&拼接**：

- partition(sep)，左往右寻找分割符，结果为元组

- rpartition(sep)，右往左

  ```python
  'www.i.com'.partition('.') # ('www', '.', 'i.com')
  'www.i.com'.rpartition('.') # ('www.i', '.', 'com')
  ```

- split(sep = None, maxsplit = -1)，分割，默认则不分割，结果为列表，maxsplit为分割次数

- rsplit(sep = None, maxsplit = -1)，右往左

- splitlines(keepends = False)，按行（换行符）分割，keepends指定结果是否包含换行符

- join(iterable)，拼接字符串

**格式化字符串**：

- format()

  ```python
  '1+1={}, 2的平方={}, 3的立方={}'.format(1+1, 2*2, 3*3*3)
  # {}内加数字指定参数，参数被视为一个元组，可以用下标索引
  '{1} {0}'.format('一', '二') # '二 一'
  '{0}{0}{1}{1}'.format('是', '非') # '是是非非'
  # 关键字参数索引
  '{name}'.format(name = 'Python') # 'Python'
  '{name} {0}'.format('开摆', name = 'Python') # 关键字索引要在下标索引后面
  # 输出{}本身
  '{}, {}'.format(1, '{}')
  '{}, {{}}'.format(1) # '1, {}'
  ```

- [[fill]align]\[sign]\[#]\[O]\[width]\[grouping_option]\[.precision]\[type]

  ```python
  '{:^10}'.format(250) # '   250    '，:左边是位置，关键字索引，右边是格式化选项，^居中，10是宽度
  '{1:>10}{0:<10}'.format(520, 250) # '       250520       '
  '{:010}'.format(520) # '0000000520'，补零，自动感知正负号，只能数字
  '{:0=10}'.format(520)
  '{:+} {:-} {:+}'.format(520, -250 , -111) # '+520 -250 -111'，不写也一样，' '空格在正数前面加空格，负数补-
  '{:,} {:_}'.format(1000, 1234) # '1,000 1_234'，千分位符号，位数不够不显示
  # 精度选项 [.precision] [type]
  '{0:.2f} {0:.2g} {1:.3}'.format(3.141, 'I love') # '3.14 3.1 I l'，f小数点后位数，g全部位数，不能对整数使用，b二进制，c返回Unicode字符，d十进制，o八进制，x十六进制，e科学计数，%转百分数
  '{:#b}'.format(80) # '0b1010000'，# 加了'0b'的前缀，'0o'八，'0x'十六
  '{:.{prec}f}'.format(3.1415, prec = 2) # '3.14'
  '{:{fill}{align}{width}.{prec}{type}}'.format(3.1415, fill='0', align='^', width=10, prec=2, type='f') # '0003.14000'
  ```

- f字符串 (f-string)，format方法的语法糖，**Py3.6+**才有

  前缀 F/f

  ```python
  year = 2022
  f'{year}' # '2022'，关键字索引
  f'1+1={1+1}, 2的平方={2*2}, 3的立方={3*3*3}'
  f'{-520:010}' # '-000000520'，把数值移到:左边
  ```

# P34~P36

序列可分为可变序列和不可变序列

```python
s = [1, 2, 3]
id(s)
s *= 2 # 增量赋值，[1, 2, 3, 1, 2, 3]
id(s) # 两次id(s)相同
```

Py中每个对象都有三个基本属性：唯一标识、类型、值

不可以被修改，也不会重复

id()返回指定对象唯一标识的整数值

```python
t = (1, 2, 3)
id(t)
t *= 2
id(t) # 两次id(s)不同
```

**is 和 is not**

用于检测对象的id值是否相等，也被称作同一性运算符

```python
x = [1, 2, 3]
y = [1, 2, 3]
x is y # False
```

**in 和 not in**

判断包含

```python
'AB' in 'ABCDE' # True
```

**del**

删除指定对象

```python
x = [1, 2, 3, 4, 5]
del x[1:4] # [1, 5]
y = [1, 2, 3, 4, 5]
y[1:4] = [] # [1, 5]
# clear方法
x.clear() # []
del x[:]
```

**列表、元组、字符串相互转换**

list()

tuple()

str()

```python
list('string') # ['s', 't', 'r', 'i', 'n', 'g']
tuple('string') # ('s', 't', 'r', 'i', 'n', 'g')
str([1, 2, 3]) # '[1, 2, 3]'
str((1, 2, 3) # '(1, 2, 3)'
```

**min() & max()**

(iterable, *[, key, default])

(arg1, arg2, *args[, key])

比较的是编码值的大小

```python
min([1, 2, 3]) # 1
max('AgL') # 'g'，字母顺序，大写在小写前
min('', default='default') # 'default'，为空输出default的内容
min(1, 0, 6, 7, 2, 4) # 0
```

**len() & sum()**

len()的位数有限，n位的平台就是 2^(n-1)-1

```python
s = [1, 2, 3, 4]
sum(s) # 10
sum(s, start=100) # sum(s, 100)，110
```

**sorted() & reversed()**

```python
s = [1, 2, 3, 0, 6]
sorted(s) # [0, 1, 2, 3, 6]，与列表的sort方法类似，但是返回的是一个全新列表
```

默认按编码值升序排列

sorted()也支持key和reverse参数

相对于列表的sort方法，sorted()函数范围更广

```python
sorted('String') # ['S', 'g', 'i', 'n', 'r', 't']
sorted((1, 0, 2, 4, 6, 8, 0)) # [0, 0, 1, 2, 4, 6, 8]
```

reversed()类似列表的reverse方法，但是返回的是一个**反向迭代器**

```python
list(reversed([1, 2, 3, 4, 5])) # [5, 4, 3, 2, 1]
```

**all() & any()**

```python
x = [1, 1, 0]
y = [1, 2, 1]
all(x) # False，非全为真
all(y) # True
any(x) # True，有为真
any(y) # True
```

**enumerate()**

返回一个枚举对象，将可迭代对象的每个元素和从0开始的序号构成一个二元组的列表

```python
list(enumerate([1, 2, 3])) # [(0, 1), (1, 2), (2, 3)]
```

有start参数

```python
list(enumerate([1, 2, 3], 10)) # [(10, 1), (11, 2), (12, 3)]
```

**zip()**

创建一个聚合多个可迭代对象的迭代器

将每个可迭代对象的每个元素合成一个元组

```python
x = [1, 2, 3]
y = [4, 5, 6]
z = 'abcd'
list(zip(x, y)) # [(1, 4), (2, 5), (3, 6)]
list(zip(x, y, z)) # [(1, 4, 'a'), (2, 5, 'b'), (3, 6, 'c')]，以最短的为准
```

```python
import itertools
list(itertools.zip_longest(x, y, z)) # [(1, 4, 'a'), (2, 5, 'b'), (3, 6, 'c'), (None, None, 'd')]
```

**map()**

根据提供函数对指定可迭代对象的每个元素进行计算，返回运算结果的迭代器

```python
list(map(ord, 'abc')) # [97, 98, 99]
list(map(pow, [2, 3, 5], [2, 3, 1])) # [4, 27, 5]，指定函数为2参数的
```

**filter()**

根据提供函数对指定可迭代对象的每个元素进行计算，返回运算结果**为真**的迭代器

```python
list(filter(str.islower, 'AbCdEfG')) # ['b', 'd', 'f']
```

​    

迭代器、可迭代对象

一个迭代器**肯定是**一个可迭代对象

可迭代对象可以重复操作，而迭代器是一次性的

```python
m = map(ord, 'abc')
list(m) # [97, 98, 99]
list(m) # []
```

​    

**iter()**

将可迭代对象变为迭代器

```python
x = [1, 2, 3, 4, 5]
y = iter(x)
type(x) # <class 'list'>
type(y) # <class 'list_iterator'>
```

**next()**

逐个提取迭代器的元素

```python
next(y) # 1
next(y) # 2
next(y) # 3
next(y) # 4
next(y) # 5
next(y) # 迭代器没元素，抛出异常

next(y, '没了') # 迭代器没元素时打印 '没了'
```

