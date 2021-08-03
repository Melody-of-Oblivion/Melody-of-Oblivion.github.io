---
title: python-docx获取word的超链接
---





安装python-docx：

```
pip install python-docx
```

获取超链接：

```python
from docx import Document
from docx import RT

d = Document('load.docx')

#存放超链接
target = {}

#获取超链接
rels = d.part.rels
for rel in rels:
    if(rels[rel].reltype == RT.HYPERLINK):
        id = rels[rel]._rId
        id = int(id[3:])
        target[id] = rels[rel]._target

#通过rId进行排序
target = [(k, target[k])for k in sorted(target.keys())]
```

