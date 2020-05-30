//数组扩展

//json 数组格式
let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}
//  Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
let arr=Array.from(json);
console.log(arr)

//Array.of方法用于将一组值，转换为数组。
let arr1=Array.of(3,4,5,6);
console.log(arr1);
let arr2 =Array.of('技术胖','jspang','大胖逼逼叨');
console.log(arr2);


//find实例
let arr3 =['jspang','技术','大胖'];
console.log(arr3.find(function(value,index,arr){
    return value=='技术胖'     //false
}))