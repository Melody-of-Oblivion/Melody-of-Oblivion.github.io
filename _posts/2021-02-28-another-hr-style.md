---
title: 另一种hr分割线样式方法
editdate: 2021-03-24
---

```scss
// 代码仅供参考
hr {
    border: 0;
    height: 2px; //分割线高度
    margin: 1rem auto;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)); //渐变色
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
    height: 1.6rem; //能够完全显示图片的高度
    margin: 1rem auto;
    background-image: url(); //图片路径
    background-position: center;
    background-repeat: no-repeat;
}
```

图案如上。