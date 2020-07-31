// //public 共有修饰符
// class XiaoJieJie{
//     public sex:string
//     protected name:string
//     private age:number
//     public constructor(sex:string,name:string,age:number){
//         this.age=age
//         this.name=name
//         this.sex=sex
//     }
//     public sayHello(){
//         console.log('小哥哥好')
//     }
//     protected sayLove(){
//         console.log('我爱你')
//     }
// }

// let jiejie:XiaoJieJie=new XiaoJieJie('女','迪丽热巴',30)
// console.log(jiejie)
// console.log(jiejie.sex)
// console.log(jiejie.name)
// console.log(jiejie.age)
// jiejie.sayHello()
// jiejie.sayLove()

//readonly只读
class Man{
    public readonly sex:string='男'
}
var man:Man=new Man()
man.sex='女'