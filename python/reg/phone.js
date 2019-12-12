// const phoneReg =/^1[35789]\d{9}/; //匹配则定义  正则表达式
// console.log(phoneReg.test('13033229336e3e3'));
// console.log(typeof phoneReg);

const phone=/^\d{3}-\d{5,8}/
console.log(phone.test('010-456646562222'));