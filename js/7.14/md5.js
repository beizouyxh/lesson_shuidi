const fs = require('fs');
const md5=require('md5');
const content=fs.readFileSync('./abc.js','utf8');

console.log(md5(content));
//hash算法：相同的输入有相同的输出
console.log(md5('123')===md5('123'));
