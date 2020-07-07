function Foo(){}

console.log(Foo.prototype)

let f = new Foo()
console.log(f.__proto__===Foo.prototype)