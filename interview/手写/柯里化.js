function sum() {
    let allArgs = Array.prototype.slice.call(arguments);
    let add = function(){
      allArgs.push(...arguments) // 每次调用 sum 函数都收集参数
      return add
    }
    // 重写 toString 方法，函数执行的时候会自动调用toString()方法，计算返回所有参数结果
    add.toString = function () {
      return allArgs.reduce((a, b) => a+b)
    }
    return add
  }
  
console.log(sum(1,2));
console.log(sum(1,2)(3))