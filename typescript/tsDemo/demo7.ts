let jspang={
    name:'技术胖',
    website:'jspang.com',
    age:18,
    saySomething:function(){
        console.log('为了钱')
    }
}


console.log(jspang.name)
jspang.saySomething()

//数组

//声明
let arr1:number[]
let arr2:Array<string>
//赋值

//构造函数赋值法
// let arr3:number[]=[]
// let arr4:number[]=[1,2,3,4]
// let arr5:Array<string>=['jspang','技术胖','金三胖']
// let arr6:Array<boolean>=[true,false,true]

//
let arr3:number[]=new Array()
let arr4:number[]=new Array(1,2,3,4)
let arr5:Array<string>=new Array('jspang','技术胖','金三胖')
let arr6:Array<boolean>=new Array(true,false,true)


//元祖
let x:[string,number]
x=['hello',10]