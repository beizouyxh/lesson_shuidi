//fill
// let arr=[0,1,2,3,4,5,6,7,8,9];
// arr.fill('jspang',2,5);
// console.log(arr);

//数组循环
let arr=['及食宿','dwdw','ffwf'];
for (let item of arr.entries()){ 
    console.log(item)
}

for (let [index,value] of arr.entries()){ 
    console.log(index+ ':' + value)
}

arr.forEach(function(value, key) {
    console.log(key + " = " + value);
})

//apply()
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements); // ["a", "b", 0, 1, 2]
// array.push(elements)  //[ 'a', 'b', [ 0, 1, 2 ] ]
console.info(array);

//entries()
let arr2=['jspang','技术胖','大胖逼逼叨']
let list=arr2.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);