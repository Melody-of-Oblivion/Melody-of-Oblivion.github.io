---
title: 获取B站登录cookie
---

# 1.手动获取

手动查看cookie，找到B站cookie的 `SESSDATA`, `DedeUserID`, `bili_jct`

# 2.js/jq获取

在B站的页面使用，输出B站cookie的DedeUserID和bili_jct

SESSDATA为HttpOnly，js不能获取。

```javascript
'use strict'

var cookie_arr = document.cookie.split(';');

for(var i = 0; i < cookie_arr.length; i++) {
    var ckname = cookie_arr[i].split('=')[0];
    var ckcont = cookie_arr[i].split('=')[1];
    if(ckname == ' DedeUserID') {
        console.log('DedeUserID: ' + ckcont);
    }
    else if(ckname == ' bili_jct') {
        console.log('bili_jct: ' + ckcont);
    }
}
```

# 3.python获取

适用于Edge浏览器

登录后关闭浏览器使用

```python
import os
import sqlite3
import base64
import json
from win32.win32crypt import CryptUnprotectData
from cryptography.hazmat.primitives.ciphers.aead import AESGCM


def get_string(local_state):
    with open(local_state, 'r', encoding='utf-8') as f:
        s = json.load(f)['os_crypt']['encrypted_key']
    return s


def pull_the_key(base64_encrypted_key):
    encrypted_key_with_header = base64.b64decode(base64_encrypted_key)
    encrypted_key = encrypted_key_with_header[5:]
    key = CryptUnprotectData(encrypted_key, None, None, None, 0)[1]
    return key


def decrypt_string(key, data):
    nonce, cipherbytes = data[3:15], data[15:]
    aesgcm = AESGCM(key)
    plainbytes = aesgcm.decrypt(nonce, cipherbytes, None)
    plaintext = plainbytes.decode('utf-8')
    return plaintext


local_state = os.environ['LOCALAPPDATA'] + r'\Microsoft\Edge\User Data\Local State'
cookiepath = os.environ['LOCALAPPDATA'] + r'\Microsoft\Edge\User Data\Default\Cookies'

domain = '.bilibili.com'

connect = sqlite3.connect(cookiepath)
connect.row_factory = sqlite3.Row
connect.text_factory = bytes
cursor = connect.cursor()
cursor.execute('SELECT name, encrypted_value as value FROM cookies where host_key like "%{}%"'.format(domain))

cookie = ''

for row in cursor:
    if row['value'] is not None:
        name = row['name'].decode('utf-8')

        key = pull_the_key(get_string(local_state))
        value = decrypt_string(key, row['value'])

        if(name == 'SESSDATA'):
            print('SESSDATA: %s' % value)
            cookie += 'SESSDATA: %s\n' % value
        elif(name == 'bili_jct'):
            print('bili_jct: %s' % value)
            cookie += 'bili_jct: %s\n' % value
        elif(name == 'DedeUserID'):
            print('DedeUserID: %s' % value)
            cookie += 'DedeUserID: %s\n' % value

f = open('bili-cookie.txt', 'w', encoding = 'utf-8')
f.write(cookie)
f.close()

cursor.close()
```

