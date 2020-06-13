function supFather(name){
    this.name=name;
    this.colors=['red','blue','green']
}
supFather.prototype.sayName=function(age){
    console.log(this.name,'age')
}
//子类
function sub(name,age){
    // 借用父类的方法：修改它的this指向,赋值父类的构造函数里面方法、属性到子类上
    supFather.call(this,name);   
    this.age=age
}

function inheritPrototype(sonFn,fatherFn){
    //完成子类对父类的原型的获取
    //如何实现
    sonFn.prototype=Object.create(fatherFn.prototype);   // 继承父类的属性以及方法
    sonFn.prototype.constructor=sonFn   // 修正constructor指向到继承的那个函数上
}