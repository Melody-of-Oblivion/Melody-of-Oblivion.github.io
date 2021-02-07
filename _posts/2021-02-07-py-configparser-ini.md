---
title: python读取ini文件的内容
---

> 简单记录。

```python
import configparser
```

使用例子：

cfg.ini：

```ini
[example]
e1 = 1
e2 = 2
```

```python
import configparser
cfg = 'cfg.ini'
conf = configparser.ConfigParser()
```

简化成下面这样：

```python
from configparser import ConfigParser
cfg = 'cfg.ini'
conf = ConfigParser()
conf.read(cfg)
e1 = conf.get("example", "e1")
e2 = conf.get("example", "e2")
```

遇到字符串里带有特殊字符报错可以改用 `RawConfigParser`

```python
from configparser import RawConfigParser
conf = RawConfigParser()
```

