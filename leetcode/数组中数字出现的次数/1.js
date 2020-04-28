var singleNumbers = function(nums) {
  let obj = {}
  for(let i = 0; i < nums.length; i++){
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
  }
  let list = []
  for(let prop in obj){
    if(obj[prop] === 1){
      list.push(prop)
    }
  }
  return list
};

let nums=[4,1,4,6,2,6,5];
console.log(singleNumbers(nums));