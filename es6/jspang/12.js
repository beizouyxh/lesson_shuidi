//symbol   全局标记
//new 都是对象

var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object; 
var f= Symbol();

var g = Symbol('jspang');
console.log(g);
console.log(g.toString());  

var jspang = Symbol();
var obj={
    [jspang]:'技术胖'
}
console.log(obj[jspang]);
obj[jspang]='web';
console.log(obj[jspang]);

//Symbol对象元素的保护作用
var obj={name:'jspang',skill:'web',age:18};
let sex=Symbol()
obj[sex]="男"
console.log(obj)   //{ name: 'jspang', skill: 'web', age: 18, [Symbol()]: '男' }

//对sex进行保护
for (let item in obj){
    console.log(obj[item]);     //jspang  web 18 
}
console.log(obj[sex])