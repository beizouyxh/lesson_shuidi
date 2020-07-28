//1.myall 挂在Function.prototype上
//2.fn的this指向为obj
//3.myCall的args传给fn

Function.prototype.myCall=function(target,...args){
    //this 指向钓鱼用myCall函数的对象
    if(typeof this !=="function"){
        throw new TypeError('not a function')
    }
    target=target || window;
    target.fn=this   // 隐式绑定，改变构造函数的调用者间接改变this指向
    let result=target.fn(...args)
    return result
}

let obj={name:'xiaoming'}
function foo(...args){
    console.log(this.name,args)
}
let s=foo.myCall(obj,'111','2222')