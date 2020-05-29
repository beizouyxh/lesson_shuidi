
console.log(['1','2','3'].map(parseInt));     //[1,NaN,NaN]   NaN:不是数字  map会给这个函数三个参数   item（1,2,3），index，arr本身
// parseint('1',0)   在parseInt 中第二个参数表示进制 0--》10进制
// parseint('2',1)   1 进制中不会出现2这个数字，所以返回NaN
// parseint('3',2)   同理2进制也没有3

// js的函数化功能
//如何确保函数在运行时，只接受一个参数 控制函数参数数量的能力