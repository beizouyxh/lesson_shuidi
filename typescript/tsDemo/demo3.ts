var age:number=NaN
var hight:number=168
console.log(age)
console.log(hight)
//num
var jspang:string = "技术胖 jspang.com"
console.log(jspang)
//boolean
var b:boolean = true
var c:boolean = false
//enum
enum REN{ nan , nv ,yao}
console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
enum REN2{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN2.yao)  //返回了妖 这个字
//any
var t:any =10 
t = "jspang"
t = true
console.log(t)