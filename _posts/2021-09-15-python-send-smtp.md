---
title: python发送第三方SMTP邮件
---

```python
import smtplib
from email.mime.text import MIMEText
from email.header import Header

# 第三方 SMTP 服务
smtp_host = ''  # 设置SMTP服务器
smtp_port = '' # 端口
mail_from = '' # 邮箱作为用户名的情况
mail_auth = '' # 密码/授权码
mail_to = ['']  # 收信邮箱

message = MIMEText('内容...', 'plain', 'utf-8')

subject = 'Python SMTP 邮件测试'
message['Subject'] = Header(subject, 'utf-8')

try:
    smtpObj = smtplib.SMTP() 
    smtpObj.connect(smtp_host, smtp_port)
    smtpObj.login(mail_from, mail_auth)  
    smtpObj.sendmail(mail_from, mail_to, message.as_string())
    print("邮件发送成功")
except smtplib.SMTPException:
    print("Error: 无法发送邮件")
```

以 [QQ邮箱](https://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=369) 为例

```python
smtp_host = 'smtp.qq.com'  # 设置SMTP服务器
smtp_port = '587' # 端口
mail_from = 'xxxxxxx@qq.com' # 邮箱作为用户名的情况
mail_auth = 'xxxxxxx' # 密码/授权码
mail_to = ['xxxxxxx']  # 收信邮箱
```

