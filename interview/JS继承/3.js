//组合式
function Parent(name) { 
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
Parent.prototype.doSomething = function() {
    console.log('parent do something!');
}
function Child(name, parentName) {
    Parent.call(this, parentName);      // 第二次调用  构造函数继承
    this.name = name;
}

Child.prototype = new Parent();         // 第一次调用   原型链式继承
Child.prototype.constructor = Child;

Child.prototype.sayName1 = function() {
    console.log('child name:', this.name);
}

var child = new Child('son');
child.sayName();      
child.doSomething();   