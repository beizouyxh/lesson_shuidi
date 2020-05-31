//map

//普通json对象
let json={
    name:'北走',
    skill:'web'
}
console.log(json)

var map=new Map();
// map.set(json,'iam');  //前面是key值，后面是value值
// console.log(map)   //Map { { name: '北走', skill: 'web' } => 'iam' }
// map.set('jspang',json)
// console.log(map)

// //map的增加
// //取值get
// console.log(map.get('jspang'))

console.log(map.delete(json))