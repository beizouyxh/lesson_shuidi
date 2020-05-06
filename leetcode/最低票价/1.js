/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = new Array(366 + 30).fill(0); // 保留每一天到最后一天的最小花费
    return leastCost(1);
    /**
    * 第i天到最后一天的最小花费;
    */
    function leastCost(i) {
       /**
        * 超过365天就视为不用钱了；因为i不能大于365
        */
        if( i >365 ) return 0;
        // 如果今天不是旅行日那：leastCost(i) === leastCost(i + 1); 晚一天买票不会亏；
        if( isTravelDay(i) ) {
            if(dp[i]){
                return dp[i]
            } else {
                dp[i] = Math.min(
                    leastCost(i + 1) + costs[0],
                    leastCost(i + 7) + costs[1],
                    leastCost(i + 30) + costs[2]
                )
                return dp[i] 
            }
        } else {
           return leastCost(i + 1);
        }
    }
   
    function isTravelDay(i) {
        return days.indexOf(i) > -1;
    }
};