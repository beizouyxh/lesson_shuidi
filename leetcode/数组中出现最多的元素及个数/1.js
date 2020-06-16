function moreValue(arr){
    if(!arr) return false;
    if(arr.lenth===1) return 1;
    let res={}
    let maxNum=0;
    let maxValue=null;
    for(let i=0;i<arr.length;i++){
        let val=arr[i]
        console.log(val)
        res[val]===undefined ? res[val]=1:res[val]++
        if(res[val] > maxNum){
            maxNum=res[val];
            maxValue=val
        }
    }
    return maxValue +',' + maxNum
}
// function moreValue(arr) {
//     if (!arr) return false;
//     if (arr.length === 1) return 1; 
//     let res = {}
//     let maxNum = 0;
//     let maxValue = null;
//     for(let i = 0; i < arr.length;i++) {
//       let val = arr[i]
//       console.log(val)
//       res[val] === undefined ? res[val] = 1 : res[val]++;
//       if(res[val] > maxNum) {
//         maxNum = res[val];
//         maxValue = val
//       }
//     }
//     return maxValue +','+ maxNum;
//   }
   
  
console.log(moreValue([1,2,3,4,5,6,4,4,4,4]))

// const arr=[1,5,6,9,8,4,2,6,3,5,8];
// console.log(Math.max.apply(null,arr))