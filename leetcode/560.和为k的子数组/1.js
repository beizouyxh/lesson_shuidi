var subarraySum = function(nums, k) {
    var len=nums.length;
    let number=0;
    if(len<=0)
    return number=0
    for(let i=0;i<len;i++){
       let sum=0;
       for(let j=i;j<len;j++){
           sum=sum+nums[j];
           if(sum===k){
             number++;
           }
       }
        
   }
    
    return number;
};

console.log(subarraySum([1,1,1,5,-3],2));