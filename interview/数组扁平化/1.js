

let arr =[1,[2,[3,[4,5]]],6];
// let str=JSON.stringify(arr); //[1,[2,[3,[4,5]]],6]

//方法一 遍历数组每一项，若值为数组则递归遍历，否则concat
// function flatten(arr){
//     return arr.reduce((result,item)=>{
//         return result.concat(Array.isArray(item) ? flatten(item) : item)
//     },[])
// }
// console.log(flatten(arr))


//方法二 先转化为字符串，在转化为数组
function flatten(arr){
    return arr.toString().split(',').map((item)=>{
        return Number(item)
    })
}

console.log(flatten(arr))

//方法三join & split
function flatten(arr){
    return arr.join(',').split(',').map((item)=>{
        return parseInt(item)
    })
}
console.log(flatten(arr))

//方法四 递归遍历每一项，若数组则继续遍历，否则concat
function flatten(arr){
    let res=[];
    arr.map(item=>{
        if(Array.isArray(item)){
            res=res.concat(flatten(item));
        }else{
            res.push(item)
        }
    })
    return res
}

console.log(flatten(arr))