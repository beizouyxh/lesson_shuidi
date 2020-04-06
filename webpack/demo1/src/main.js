// webpack 怎么在js 文件里处理css文件
const css = require('css-loader!./index.css'); // { }
//js引入css并不是水火不相容的 css属性结点 css文本
// dom node结点 Tree,再使用css
//css in js 

//图片以二进制引入
const a = 100;
// console.log(a);
console.log(a, css);