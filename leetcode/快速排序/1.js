
const arr =[0,5,6,2,4,7,8];
//一次快排 能够给一个数
// let provit=
//k 数组的索引
//1. provit 找到正确的位置(数组里面的索引)
//2. 左边小于   provit  右边大于

//阮一峰版
//缺点：没有原地交换数组里面的两个数据
const quickSort=function(arr){
    if(arr.length<=1) return arr;
    let provit =arr[0];
    let right=[],left=[];
    for (let i=1;i<arr.length;i++){
        if(arr[i] < provit) 
         left.push(arr[i]);
        if(arr[i]> provit)
        right.push(arr[i]);
    }
    return [...(quickSort(left)) , provit ,...quickSort(right)]
}

console.log(quickSort(arr))