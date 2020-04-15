const getUserInfo1=function(user :{name: string,age:number}){    //参数随意
    //arguments js 不靠谱 javascript语言精粹
    return 'name: ${user.name}, age: ${user.age}'
   
}

//js 不会做运行前检测，动态语言   Java、ts静态语言
//先编译再运行  ts 检测语法
//多人协作时不严格的语法会带来麻烦
// console.log(getUserInfo("efewfffwf"))
console.log(getUserInfo1({name:'尹小豪',age:22}));