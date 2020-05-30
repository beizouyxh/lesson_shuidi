//函数和数组补漏

//对象的函数解析json
// let json={
//     a:'北走',
//     b:'neizou'
// }

// function fun(a,b='web'){
//     console.log(a,b)
// }

// fun(json);     //{ a: '北走', b: 'neizou' } web


//数组结构

let arr=['北走','beizou','前端'];
function fun(a,b,c){
    console.log(a,b,c)
}

fun(...arr)   //北走 beizou 前端


//in的用法
let obj={
    a:'beizou',
    b:'北走'
}
console.log('c' in obj)    //false

let arr1=[,,,];
console.log(arr.length)  //3   这种方法不好，会导致业务逻辑错误
console.log(0 in arr1)     //false



//数组遍历 forEach
let arr2 =['北走','beizou','钱盾']
arr2.forEach((val,index)=>{
    console.log(index,val)
})
//filter
arr2.filter(x=>console.log(x))
//some
arr2.some(x=>console.log(x))    
//map
console.log(arr2.map(x=>'web'))    //[ 'web', 'web', 'web' ]   替换为web

//转化为字符串
console.log(arr2.toString())    //北走,beizou,钱盾
console.log(arr2.join('-'))     //北走-beizou-钱盾
