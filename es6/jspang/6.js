//     数字操作

//二进制 Binary
let binary=0B010101;
console.log(binary)     //21

//八进制  Octal
let b=0o666;
console.log(b);     //438

//数字验证   isFinite
let a= 11/4;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false

//判断是否为整数Number.isInteger(xx)
let c =123.1;
console.log(Number.isInteger(c)); //false

//整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
let d='9.18';
console.log(Number.parseInt(d));    //9
console.log(Number.parseFloat(d));   //9.18

//** 整数取值范围操作 **
let e= Math.pow(2,53)-1;
console.log(e); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER);   //max_safe_integer
console.log(Number.MIN_SAFE_INTEGER);         //最小安全整数
console.log(Number.isSafeInteger(e));//true        判断是否安全整数