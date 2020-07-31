//public 共有修饰符
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(sex, name, age) {
        this.age = age;
        this.name = name;
        this.sex = sex;
    }
    XiaoJieJie.prototype.sayHello = function () {
        console.log('小哥哥好');
    };
    XiaoJieJie.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('女', '迪丽热巴', 30);
console.log(jiejie);
console.log(jiejie.sex);
console.log(jiejie.name);
console.log(jiejie.age);
jiejie.sayHello();
jiejie.sayLove();
