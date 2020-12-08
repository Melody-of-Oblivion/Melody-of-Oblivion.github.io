---
title: TinyURL服务的API使用
editdate: 2020-12-08
---

[TinyURL](https://tinyurl.com/)是一个专门提供缩略网址服务的网站，于2002年1月开始提供服务，我们能用它来生成网址的短链接。

官网并没有直接提供API，但其实很简单：

```
http://tinyurl.com/api-create.php?url=
```

API就是调用的这个地址。

在 `=` 后面加上URL并访问，就能反悔缩短后的URL了。

简单的Py代码参考：

```python
import requests

raw_url = input('Input origin url:')
returnlink = requests.get('http://tinyurl.com/api-create.php?url=' + raw_url)

print(returnlink)
```

------

反过来可以访问短链接来获取原网址

Py代码参考：

```python
import requests

access = requests.head(short_url)
origin_link = access.headers.get('location')

print(origin_link)
```

