---
title: 快速卸载python所有第三方库
---

cmd输入

```sh
pip freeze > pg.txt
```

```sh
pip uninstall -r pg.txt -y
```

删除pg.txt文件。