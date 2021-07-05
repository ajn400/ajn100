[purgecss](https://www.purgecss.cn/)

[Taiwin css](https://www.tailwindcss.cn/docs/utility-first)

#### css字体

换行变得美观，同时使对齐属性不变得呆板

```css
hyphens:auto
```

css中换行

```css
content: "\A";
white-space: pre;
```

css斑马纹背景

```css
font-size: 10px;
width: 500px;
padding: .5em;
line-height: 1.5em;
background: beige linear-gradient(rgba(0, 0, 0, .2) 50%, transparent 0);
background-size:auto 3em;
background-position: 0 .5em;
```

css自定义下划线

```css
background: linear-gradient(gray, gray) no-repeat;
background-size: 100% 1px;
background-position: 0 1.2em;
text-shadow: .05em 0 white, -.05em 0 white;
text-decoration: none;
line-height: unset;
```

#### css表格

1. border-collapse:collapse;边框合并
2. :only-child选择器等同于:last-child:first-child

#### 满幅的背景，定宽的内容

特征

1. 页面中包含多个大区块，每个区块都占据了整个视口的宽度，区块 的背景也各不相同。
2. 内容是定宽的，即使在不同分辨率下的宽度不一样，那也只是因为 媒体查询改变了这个固定的宽度值

例如

```css
footer {
 background: #333;
}
.wrapper {
 max-width: 900px;
 margin: 1em auto;
}
```

替代方案

```css
footer {
 padding: 1em;
 padding: 1em calc(50% - 450px);
 background: #333;
}
```

`padding:1em`是calc()不兼容时的回退解决方案

#### css列表

1. list-style-type
2. list-style-image
3. list-style-position
4. 简写list-style
5. ol有序ul无序

自定义列表前缀样式

```css
li:before{
    content: " ";
    width: 3px;
    height: 3px;
    background: #3388FB;
    display: inline-block;
    position: relative;
    top: -3px;
    right: 5px;
}
```

 `list-style-type` 属性的常见属性值的描述：

- `none`：不使用项目符号
- `disc`：实心圆
- `circle`：空心圆
- `square`：实心方块
- `decimal`：阿拉伯数字 
- `lower-alpha`：小写英文字母 
- `upper-alpha`：大写英文字母 
- `lower-roman`：小写罗马数字 
- `upper-roman`：大写罗马数字

#### css轮廓

　    outline：在一个声明中设置所有的轮廓属性 
　　outline-style：设置轮廓的样式
　　outline-width：设置轮廓的宽度 
　　outline-color：设置轮廓的颜色
　　outline-offset：对轮廓进行偏移，并在边框边缘进行绘制

 