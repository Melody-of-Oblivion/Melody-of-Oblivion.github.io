---
title: 阿里云函数部署genshinhelper签到服务
---

# 准备

服务本体：

[云函数用zip压缩包](https://wwa.lanzoui.com/b07mk6dla) (ed03)

云函数：

[阿里云函数](https://cn.aliyun.com/product/fc)

消息推送（可不用）：

[Server酱](https://sct.ftqq.com/)

参考：

[官方博客](https://www.yindan.me/tutorial/genshin-impact-helper.html)

[代码仓库](https://github.com/y1ndan/genshinhelper2)

----

# 创建云函数

登录阿里云函数，完成身份认证

进入管理控制台，点 `服务及函数`

创建一个新服务，名字随意，点击确定

进入服务后点击 `创建函数`，创建一个新函数

默认使用内置运行时创建

填写函数名称

运行环境改为 **Python3**，上传方式选 ZIP包 上传，上传下载好的压缩包

执行超时时间改为 600

请求处理程序改为 index.main_handler

添加环境变量（见下方）

触发器选择定时触发器，填写名称，触发方式选择指定时间，再自行修改指定时间即可

----

# 获取Cookie

## 国服Cookie

浏览器InPrivate模式打开 [米游社](https://bbs.mihoyo.com/ys/)，登录账号

F12在控制台输入

```javascript
let domain = document.domain;
let cookie = document.cookie;
prompt('Cookies: ' + domain, cookie)
```

> Cookie应包含 account_id 和 cookie_token 两个字段
>
> 多账号cookie中间用 # 号隔开

保留 `account_id=xxxxxxx; cookie_token=xxxxxx`，得到Cookie **①**

~~社区任务~~

浏览器InPrivate模式打开 [米哈游通行证](https://user.mihoyo.com/#/login/)

登录后cookies获取方法同上

> Cookie应包含 login_ticket，保留这段

电脑安装python3环境，分别执行

```sh
pip install genshinhelper
python -m genshinhelper
```

按提示输入 `account_id=xxxxxx; login_ticket=xxxxxx`

得到Cookie **②**

> 需要尽快完成，避免cookie失效

## 国际服Cookie（可选）

InPrivate登录 [HoYoLab](https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481&lang=en-us)

获取方法同国服

----

# 获取Server酱的SendKey

微信扫码关注公众号，登录Server酱，就可以获取SendKey了，免费每天有5次限制

----

# 添加云函数环境变量

具体变量和参数见官方博客下方的 **配置** → **环境变量**

（参考）添加环境变量

|      变量名      |                             内容                             |
| :--------------: | :----------------------------------------------------------: |
|     LANGUAGE     |                              zh                              |
| COOKIE_MIHOYOBBS |                      获取的Cookie **①**                      |
|    COOKIE_BH3    |                             同上                             |
|  COOKIE_MIYOUBI  |                      获取的Cookie **②**                      |
|     ONEPUSH      | {"notifier":"serverchan","params":{"markdown":false,"sckey":"Server酱的SendKey"}} |

推送走公网需要收费，可以考虑不加 `ONEPUSH`
