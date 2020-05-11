var myPow = function (num, power) {
    if (power < 0) return 1 / num * myPow(1 / num, -(power + 1))
    if (power === 0) return 1 
    if (power === 1) return num
    // 以上分别为power小于0 等于0 等于1 的情况
    let res = 1
    while (power > 1) { // power大于1
      if (power % 2 === 1) {
        res = res * num
        power--
      }
      num = num * num
      power = power / 2
    }
    return res * num
  };
  
console.log(myPow(2,10));
console.log(myPow(2,0));
console.log(myPow(-5,5));
console.log(myPow(2,-10));



