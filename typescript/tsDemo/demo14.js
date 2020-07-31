// //接口
// interface Husband{
//     sex:string
//     interest:string
//     //？ 可选
//     byBao?:Boolean
// }
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、富、帅、德', '胖'));
