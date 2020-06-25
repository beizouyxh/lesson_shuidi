//原型链式继承
function Parent(name) { 
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
function Child(name) {
    this.name = name;
}

Child.prototype = new Parent('father');


Child.prototype.sayName1 = function() {
    console.log('child name:', this.name);
}

var child = new Child('son');
child.sayName1();    // child name: son
child.sayName()    // parent name : son