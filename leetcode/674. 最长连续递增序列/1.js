//双指针
var findLengthOfLCIS = function(nums) {
    if(!nums || !nums.length) return 0
    let left=0, result=1;
    while(left<nums.length){
        right=left+1;
        while(right<nums.length){
            if(nums[right-1]<nums[right]){
                right++
                const range=right-left;
                
                result =Math.max(result,range)
               
            }else{
                break;
            }
        }
        left=right
    }
    return result
};

console.log(findLengthOfLCIS([1,3,5,7,8,4,6]))