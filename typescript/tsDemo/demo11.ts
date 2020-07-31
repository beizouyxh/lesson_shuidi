//类是对象事物的一个抽象，对象是类的具体体现

import { couldStartTrivia } from "typescript"

class XiaoJieJIe{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    say(){
        console.log('小哥哥好')
    }
}

let jiejie:XiaoJieJIe=new XiaoJieJIe('三上悠亚',28)
console.log(jiejie)
jiejie.say()