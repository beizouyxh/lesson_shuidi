const isHappy = n => {
    let set = new Set(), sum
     n = n+ ''
     console.log(n.length)
    while (sum !== 1) {
      sum = 0    
      for (let i = 0; i < n.length; i++) {
          console.log(n[i])
        sum += n[i]*n[i]
      }
      n = sum + ''
      if (set.has(sum)) return false
      set.add(sum)
    }
    return true
  }
  
  console.log(isHappy(111))