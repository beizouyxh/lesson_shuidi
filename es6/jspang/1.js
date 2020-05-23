
//扩展运算符    ...arg
function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);

}
jspang(1,2,3);

let arr1=['www','jspang','com'];
// let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

function jspang(first,...arg){
    console.log(arg.length);
}

jspang(0,1,2,3,4,5,6,7);     //7


function jspang(first,...arg){
    //   ES5
    // for(let i=0;i<arg.length;i++){
    //     console.log(arg[i])
    // }

    //   ES6  rest 运算符
    for(let val of arg){
        console.log(val);
    }
}

jspang(0,1,2,3,4,5,6,7);