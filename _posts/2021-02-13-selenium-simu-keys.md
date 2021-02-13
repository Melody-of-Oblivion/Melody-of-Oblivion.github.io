---
title: selenium模拟按键键位
---

Python示例：

```python
driver.find_element_by_tag_name('body').send_keys(F5)
```

键位：

```
# Keys.BACK_SPACE：回退键（BackSpace）
# Keys.TAB：制表键（Tab）
# Keys.ENTER：回车键（Enter）
# Keys.SHIFT：大小写转换键（Shift）
# Keys.CONTROL：Control键（Ctrl）
# Keys.ALT：ALT键（Alt）
# Keys.ESCAPE：返回键（Esc）
# Keys.SPACE：空格键（Space）
# Keys.PAGE_UP：翻页键上（Page Up）
# Keys.PAGE_DOWN：翻页键下（Page Down）
# Keys.END：行尾键（End）
# Keys.HOME：行首键（Home）
# Keys.LEFT：方向键左（Left）
# Keys.UP：方向键上（Up）
# Keys.RIGHT：方向键右（Right）
# Keys.DOWN：方向键下（Down）
# Keys.INSERT：插入键（Insert）
# DELETE：删除键（Delete）
# NUMPAD0 ~ NUMPAD9：数字键1-9
# F1 ~ F12：F1 - F12键
# (Keys.CONTROL, ‘a’)：组合键Control+a，全选
# (Keys.CONTROL, ‘c’)：组合键Control+c，复制
# (Keys.CONTROL, ‘x’)：组合键Control+x，剪切
# (Keys.CONTROL, ‘v’)：组合键Control+v，粘贴
```

