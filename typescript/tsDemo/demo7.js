var jspang = {
    name: '技术胖',
    website: 'jspang.com',
    age: 18,
    saySomething: function () {
        console.log('为了钱');
    }
};
console.log(jspang.name);
jspang.saySomething();
//数组
//声明
var arr1;
var arr2;
//赋值
//构造函数赋值法
// let arr3:number[]=[]
// let arr4:number[]=[1,2,3,4]
// let arr5:Array<string>=['jspang','技术胖','金三胖']
// let arr6:Array<boolean>=[true,false,true]
//
var arr3 = new Array();
var arr4 = new Array(1, 2, 3, 4);
var arr5 = new Array('jspang', '技术胖', '金三胖');
var arr6 = new Array(true, false, true);
