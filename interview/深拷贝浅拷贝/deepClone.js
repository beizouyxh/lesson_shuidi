// const target = {
//     field1: 1,
//     field2: undefined,
//     field3: {
//         child: 'child'
//     },
//     field4: [2, 4, 8],
//     f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
// };

// target.target = target;

// // console.time();
// // const result = clone(target);
// // console.timeEnd();

// // console.time();
// // const result2 = clone(target);
// // console.timeEnd();

// function clone(target, map = new WeakMap()) {
//     if (typeof target === 'object') {
//         const isArray = Array.isArray(target);
//         let cloneTarget = isArray ? [] : {};

//         if (map.get(target)) {
//             return map.get(target);
//         }
//         map.set(target, cloneTarget);

//         const keys = isArray ? undefined : Object.keys(target);
//         forEach(keys || target, (value, key) => {
//             if (keys) {
//                 key = value;
//             }
//             cloneTarget[key] = clone(target[key], map);
//         });

//         return cloneTarget;
//     } else {
//         return target;
//     }
// }
// function forEach(array, iteratee) {
//     let index = -1;
//     const length = array.length;
//     while (++index < length) {
//         iteratee(array[index], index);
//     }
//     return array;
// }

// console.log(clone(target))


let deepClone=(obj)=>{
    if(typeof obj !== 'object') return false;
    let newObj= obj instanceof Array ? [] :{};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]=typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
        }
    }
    return newObj
}
let arr = {
    a: 'one', 
    c:[1,5,6,9,3],
    b: ()=>{
      console.log()
    }
  };
  let arr1=deepClone(arr)
  arr1.c.push(9)
console.log(arr1)