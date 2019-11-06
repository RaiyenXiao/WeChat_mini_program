### 可以尽量在微信小程序使用es6方法

### 绑定方法修改:
##### 原写法：
```
getUserPhone: function(e) {
  console.log(e);
}
```
#### es6写法
```
getUserPhone(e) {
  console.log(e);
}
```
### 循环写法:
##### 原写法：
```
for(var i = 0; i <= array.length; i++) {
  console.log(array[i]);
}
```
#### es6写法
```
for (let i of array) {
  console.log(i);
}
```