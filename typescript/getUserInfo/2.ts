//interface 不太好理解
// user 实现了IUser 一样的属性和方法的对象 接口
interface IUser{
    name:string;
    age:number;
}
const getUserInfo2=(user:IUser) :string=>{
    // if(true){
    //     return 123;
    // }
    return `name: ${user.name}, age: ${user.age}`
}
console.log(getUserInfo2({name:'尹小豪',age:22}))