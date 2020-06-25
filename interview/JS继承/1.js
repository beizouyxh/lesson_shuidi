// 构造函数继承
function Parent1() {
    this.name = 'parent1';
}
Parent1.prototype.say=function(){
    console.log('say')
}
function Child1() {
    Parent1.call(this);
    this.type = 'child1'
}
let child=new Child1();
console.log(child.say())
console.log(child.name)