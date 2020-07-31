function getTotal(one:number,two:number):number{
    return one+two+''
}
//可以推断出total的类型
const total=getTotal(1,2)