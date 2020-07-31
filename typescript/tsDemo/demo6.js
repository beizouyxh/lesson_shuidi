// //变量的作用域，函数划分
// var yangzi:string="刘德华"
// function zhengXing():void{
//     var yangzi:string="张学友"
//     console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// //yangzi为局部变量，函数外无法访问
// // console.log(yangzi)
function zhengXing() {
    var yangzia = '刘德华';
    {
        let yangzib = '张学友';
        console.log('技术胖整形成了' + yangzib + '的样子');
    }
    console.log('技术胖整形成了' + yangzia + '的样子');
    console.log('技术胖整形成了' + yangzib + '的样子'); //张学友，因为es6转换成es5
}
zhengXing();
