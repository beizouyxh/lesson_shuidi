Array.prototype.myReduce=function(cb,initValue){
    if(!Array.isArray(this)){
        throw new TypeError('not a array')
    }
    if(this.length===0 && arguments.length<2){
        throw new TypeError('reduce of empty with no initial value')
    }
    let arr=this
    let res=null;
    //判断有没有初始值
    if(arguments.length>1){
        res=initValue
    }else{
        res=arr.splice(0,1)[0]  //没有就取第一个值
    }
    arr.forEach((item,index)=>{
        res=cb(res,item,index,arr)  //cb 每次执行完都会返回一个新的res值，覆盖之前的res
    })
    return res
}
//测试结果
let arr=[1,2,3,4];
let result=arr.myReduce((res,cur)=>{
    return res+cur
})

console.log(result)