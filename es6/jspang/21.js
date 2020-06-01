var kidsWithCandies = function(candies, extraCandies) {
    let result=[]
    var  max = Math.max.apply(null,candies);
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies <= max){
            result.push(false)
        }else{
             result.push(true)
        }     
    }
    return result

};
console.log(kidsWithCandies([1,3,5,6,0],3));