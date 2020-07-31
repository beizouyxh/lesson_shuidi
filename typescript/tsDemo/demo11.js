"use strict";
//类是对象事物的一个抽象，对象是类的具体体现
exports.__esModule = true;
var XiaoJieJIe = /** @class */ (function () {
    function XiaoJieJIe(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJIe.prototype.say = function () {
        console.log('小哥哥好');
    };
    return XiaoJieJIe;
}());
var jiejie = new XiaoJieJIe('三上悠亚', 28);
console.log(jiejie);
jiejie.say();
