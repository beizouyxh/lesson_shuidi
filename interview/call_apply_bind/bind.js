// 手写代码

// 返回一个新的函数，this 指向第一个参数
// 1.拷贝源函数 
//   - 通过变量存储源函数
//   - 通过Object.create复制源函数的prototype
// 2.将其返回
// 3.调用时候的区别
//   - new调用判断
//扩展函数原型对象，添加一个myBind方法
Function.prototype.myBind=function(objThis,...params){
    const thisFn=this; //存储源函数以及上方的params（函数参数）
     //对返回的函数进行 二次传参 
    let fToBind=function(...secondParams){
        const isNew=this instanceof fToBind    //new 调用
        const context=isNew ? this : Object(objThis); //this 覆盖为上下文对象
        return thisFn.call(context,...params,...params);
    }
    if(thisFn.prototype){
        fToBind.prototype=Object.create(thisFn.prototype)
    }
    return fToBind;
}
func.myBind()