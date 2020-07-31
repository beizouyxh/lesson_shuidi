// //接口
// interface Husband{
//     sex:string
//     interest:string
//     //？ 可选
//     byBao?:Boolean
// }

// let myHusban:Husband={sex:'男',interest:'看书',byBao:true}
// console.log(myHusban)

interface SearchMan{
    (source:string,subString:string):boolean
}

let mySearch:SearchMan
mySearch=function(source:string,subString:string):boolean{
    let flag=source.search(subString)
    return (flag!=-1)
}
console.log(mySearch('高、富、帅、德','胖'))