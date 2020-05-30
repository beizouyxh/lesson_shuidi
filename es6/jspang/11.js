// 对象赋值
// let name='beizou'
// let skill='web'
// let obj=[name,skill]
// console.log(obj)


//对象Key值构建
let key="skill"
let obj={
    [key]:'web'
}
console.log(obj.skill)    //web

// 自定义对象方法
let obj1={
    add:function(a,b){
        return a+b
    }
}

console.log(obj1.add(1,2))    //3



//对象比较
let obj3={name:"beizou"}
let obj2={name:"beizou"}
console.log(obj2.name===obj3.name)   //true
console.log(Object.is(obj3.name,obj2.name)); //true   

//   ===同值相等 is严格相等
console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true

// Object.assign( )合并对象
let a={name:'北走'}
let b={age:23}
let c={sex:'男'}
let d=Object.assign(a,b,c)
console.log(d)
