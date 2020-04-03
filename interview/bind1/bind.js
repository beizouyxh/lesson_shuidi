const sum = (a, b, c) => {
    return a + b + c;
}
console.log(sum(10, 10, 10));
//参数不够  1个参数
let sum10 = sum.bind(null, 10);
//接着传顺下的两个，什么能够传参？？ =》返回函数
//你继续传在这个函数里面
console.log(sum10(20, 30));

//
Function.prototype.myBind = function(thisObj, ...arg1) {
    let fn = this;

    function innerFunc(...arg2) {
        const args = arg1.concat(arg2);
        fn.call(thisObj, ...args);

    }
    return innerFunc;
}