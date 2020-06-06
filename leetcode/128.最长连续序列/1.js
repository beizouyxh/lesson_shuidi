var longestConsecutive = function(nums) {
    if(nums.length===0) return 0
    nums.sort((a,b)=>a-b)
    let max=1
    let count=1
    for (let i=0;i<nums.length-1;i++){
        let cur=i,next=i+1
        if(nums[cur] === nums[next]) continue    //相同就跳过本次循环
        if(nums[cur]+1===nums[next]){      //连续项 count++
            count++
        }else{
            count=1  //重置
        }
        max=Math.max(max,count)
    }
    return max
 };

 console.log(longestConsecutive([1,8,9,10,11,88,64,65,66,67,68]))