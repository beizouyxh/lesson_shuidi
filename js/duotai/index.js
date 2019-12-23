function Person(name, age) {
    this.name = name;
    this.age = age;
}
//覆盖了Object上原有的toString方法
Person.prototype.toString = function() {
    return 'I am a person,my name is ' + this.name;
}

function Man(name, age) {
    //Person 构造函数 把父类的构造函数执行一下
    console.log(arguments, '----');
    Person.apply(this, arguments); //argumrnts(参数的数组) 
}
Man.prototype = Object.create(Person.prototype); //Person.prototype(把父类的原型对象作为模板)   Object.create 再创建一个对象


//toString方法被覆盖
Man.prototype.toString = function() {
    return 'I am a 007,my name is' + this.name;
}
var llg = new Man('李立高', 22);
console.log(llg + "");

var person = new Person('尹小豪 ', 22);
console.log(person + ""); //person字符串化（主动调用toString) 类型转化
const arr = ['李立高', '海弟'];
console.log(Object.prototype.toString.call(arr)); //call借用
//[object Array]