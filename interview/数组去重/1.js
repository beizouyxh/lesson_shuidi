// var arr=[1,3,5,6,3,5];

// const arr2=new Set(arr)
// console.log(arr2)


// function unique(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(!res.includes(arr[i])){
//            res.push(arr[i])
//         }
//     }
//     return res
// }
// onsole.log(unique(arr));


// let res=[]
// for(let i=0;i<arr.length;i++){
//     if(res.indexOf(arr[i])==-1){
//         res.push(arr[i])
//     }
  
// }
// console.log(res)

// let len=arr.length
// for(let i=0;i<len;i++){
//     for(let j=1+i;j<len;j++){
//         if(arr[i]===arr[j]){
//             arr.splice(i,1)
//             len--
//             j--;
//         }
//     }
// }
// console.log(arr)


// function unique(array) {
//     return Array.from(new Set(array));
//   }
  
//   unique([1, 1, 2, 3, 3]); // => [1, 2, 3]


let obj={
    0:'beizou',
    1:22,
    2:'男',
    length:3
}
// console.log(Array.from(obj))
// console.log(Array.apply(null,obj))
console.log(Array.prototype.concat.call([],obj))