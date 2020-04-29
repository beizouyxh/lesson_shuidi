const {fromJS,Map} =require('immutable');
//immutable 不可变数据流管理
//js 深拷贝 浅拷贝
//对象的修改，引用式赋值
//immutable  全新对象  浅拷贝
const map1= Map({a: 1 ,b: 2 ,c: 3})    //Ma
const map2=map1.set('b',50);
console.log(map2);
