//O(n^2)->O(n)
function maxSubArray(nums){
    var max=-Number.MAX_VALUE;
    var sum=0;
    for(let num of nums){
        if(sum<0){  //加了跟没加一样  如：0 -1 -2 -3等相加小于0
           sum=0;
        }
        sum+=num;
        max=Math.max(max,sum);
        //加到了什么？让从下一个数开始 什么情况放弃 之前加的值不管最大子和是多少，
        //它都是一次for循环
    }
}