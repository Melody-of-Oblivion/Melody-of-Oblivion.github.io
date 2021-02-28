---
title: 另一种hr分割线样式方法
---

```scss
// 代码仅供参考
hr {
    border: 0;
    height: 2px;
    margin: 1rem auto;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
```

演示：

<hr style="border: 0;height: 2px;margin: 1rem auto;background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">

​    

------

也可以用 `background-image` 来修改分割线的图案：

```scss
// 代码仅供参考
hr {
    border: 0;
    height: 1.5rem;
    margin: 1rem auto;
    background-image: url();
    background-position: center;
    background-repeat: no-repeat;
}
```

