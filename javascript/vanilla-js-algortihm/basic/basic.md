# 基本知识积累
## js数组方法
> #### concat()

```js
const a=[1,2,3];
console.log(a.concat(4,5));
```

~~~js
const b=[1,2,3];
const c=[4,5,6];
console.log(b.concat(c));
console.log(b.concat(c,c));
~~~

~~~js
const str1='a,b,c';
const str2='d,e,f';
console.log(str1.concat(str2))
~~~

> ### splice
~~~js
arr.splice(1,3);
//删除第一项的位置，要删除的项数
arr.splice(1,0,1,2)
//添加项目时，第二个参数为0，第一个参数还是表示添加的位置，第三个参数往后便是将要添加的值
~~~

> ### indexOf和lastIndexOf
