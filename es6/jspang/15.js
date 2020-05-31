// //proxy 代理 ES6 增强对象和函数   预处理
// let obj ={
//     add:function(val){
//         return val+100
//     },
//     name:'beizou'
// }
// let pro=new Proxy({
//     add:function(val){
//         return val+100
//     },
//     name:'beizou'
// },{
//     //get set apply
//     get:function(target,key,property){
//         console.log('come in get')  //come in get
//         console.log(target)     //{ add: [Function: add], name: 'beizou' }
//         console.log(key)     //name
//         return target[key]   //beizou
//     },
//     set:function(target,key,value,receiver){
//          console.log(`setting ${key} = ${value}`)
//          return target[key]=value
//     }
// })
// console.log(pro.name)    
// pro.name='技术胖'    //setting name = 技术胖
// console.log(pro.name)

let target=function(){
    return 'beizou'
}
let handler={
    apply(targrt,ctx,args){
        console.log('do apply')
        return Reflect.apply(...arguments)
    }
}
let pro=new Proxy(target,handler)
console.log(pro())