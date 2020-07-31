//函数声明法
function add(n1:number,n2:number):number{
    return n1+n2;
}

console.log(add(1,2))


//函数表达式法
var Add=function(n1:number,n2:number):number{
    return n1+n2;
}

console.log(Add(2,3));

//箭头函数表示法，完全支持ES6
var ADD=(n1:number,n2:number):number=>{
    return n1+n2;
}

console.log(ADD(3,3))

