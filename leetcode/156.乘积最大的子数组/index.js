var maxProduct = function(nums) {
    const len=nums.length;
   
    let max=nums[0]
    let product=null
    for (let i=0;i<len;i++){
        product=nums[i]
        for(let j=i+1;j<len;j++){
            product=product * nums[j]
            max=Math.max(product,max)
        }
    }
    return max

};

console.log(maxProduct([-1,2,-3,0,1,6]));