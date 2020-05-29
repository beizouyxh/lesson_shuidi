// 下面的代码a 在什么情况下会打印 1？ 4
//  ==判断  会进行隐式类型转换 1+"2"      显示类型转换  Number("123")
//  ===恒等 
// var a={    
//     i:1,
//     toString(){
//         return a.i++
//     }
// };
// a 要是变化的才能满足  对象


//还有别的方法吗？ es6 有哪个概念可以让我们的值来三段锦

// var a={
//     num:0
// };
// a.valueOf=function(){
//     console.log('valueOf------')
//     return ++a.num
// }

//generator next
// let a={
//     gn:(function * (){
//          yield 1;
//          yield 2;
//          yield 3;
//     })(),
//     valueOf(){
//         return this.gn.next().value;
//     }
// }
// var value = 0; //window.value
// Object.defineProperty(window, 'a', {
//     get: function() {
//         return this.value += 1;
//     }
// });

// console.log(a===1 && a===2 && a===3) // true
let foo = {
    value: 1,
    getValue:function(){
        console.log(this.value)
    }
 }
    function A() {
        this.foo = 1
      }
      
      A.prototype.bar =function(){  console.log(this.foo)}
      
      let a = new A()
      a.bar()  //undefined
  
  foo.getValue();  // undefined