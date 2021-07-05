> “44 年前我们就把人类送上月球了，但现在我们仍然无法在 CSS 中 实现垂直居中。” ——James Anderson

#### display

` display:  [ <display-outside> | <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy> ;`

1.1、none：此元素不会被显示。

1.2、block：此元素将显示为块级元素，此元素前后会带有换行符。

1.3、inline：默认。此元素会被显示为内联元素，元素前后没有换行符。

1.4、inline-block：行内块元素。（CSS2.1 新增的值）

1.5、list-item：此元素会作为列表显示。

1.6、run-in：此元素会根据上下文作为块级元素或内联元素显示。

1.7、*compact：CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。*

1.8、marker：CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。

1.9、table：此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。

2.0、inline-table：此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符。

2.1、table-row-group：此元素会作为一个或多个行的分组来显示（类似 <tbody>）。

2.2、table-header-group：此元素会作为一个或多个行的分组来显示（类似 <thead>）。

2.3、table-footer-group：此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。

2.4、table-row：此元素会作为一个表格行显示（类似 <tr>）。

2.5、table-column-group：此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。

2.6、table-column：此元素会作为一个单元格列显示（类似 <col>）

2.7、table-cell：此元素会作为一个表格单元格显示（类似 <td> 和 <th>）

2.8、table-caption：此元素会作为一个表格标题显示（类似 <caption>）

2.9、inherit：规定应该从父元素继承 display 属性的值。

#### cursor

[mdn:cursor](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)

# css条件查询

#### @supports

```css
@supports <supports-condition> {
  <stylesheet>
}
```

[说说css中的@supports](https://mp.weixin.qq.com/s?src=3&timestamp=1625473804&ver=1&signature=4gRZPRBAat7v1kITkINwECTAb*IHd97gZOPsl2kQfxF4PRxGdES1jKtFr1MKi*BT3NWbgXgqX5d6mXLr4oXR4m1PaJ*vZd72h8PQ7DElOYumYZMtS0xSnmPdzzbaRGrMKrnJ5Ij0D2QE-HKji7xA9O7L2nnx2QAb01P5vY6Ih6c=)

#### @viewport

<p style="color:red">已废弃</p>

#### @media

```css
@media mediatype and | not | only (media feature) { css-code; } 
```

```html
<link rel="stylesheet" href="styleB.css" media="screen and (max-width: 800px)">
```

相关链接

[媒体查询使用——@media](https://mp.weixin.qq.com/s?src=11&timestamp=1625473949&ver=3171&signature=bX0Do*gGX7SVowi9M8aIwb-WnqRB5MR5GuZod7z04ajWs6g4dIBhugNqC2vev-bqaBoFNpZcjkVqqLZBFP1A18fG5mku6BXa3gOCXByk*BJIDKt2St4Ac56Nu*pdacg*&new=1)

[css中媒体查询的总结](https://blog.csdn.net/u010510187/article/details/82790963)