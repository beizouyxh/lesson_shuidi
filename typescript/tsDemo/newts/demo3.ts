// let counts:number;
// counts=123
// //类型推断
// let countsIntface=123


//不加属性为any,无法潘磊two,one的类型
function getTotal(one:number,two:number){
    return one+two
}
//可以推断出total的类型
const total=getTotal(1,2)
console.log(total)