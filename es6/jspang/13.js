//Set 不允许重复

let setArr = new Set(['jspang','技术胖','web','jspang']);
console.log(setArr);  //Set {"jspang", "技术胖", "web"}
// add添加
setArr.add('前端职场')  //Set { 'jspang', '技术胖', 'web', '前端职场' }
console.log(setArr);

//has查找
console.log(setArr.has('jspang'))   //true

//delete删除
setArr.delete('技术胖')
console.log(setArr)

//for..of
for(let item of setArr){
    console.log(item)
}           

//forEach
setArr.forEach((value)=>console.log(value))    //  jspang web 前端职场

//size =length
console.log(setArr.size);     //3





//   weakSet
let weakObj=new WeakSet();
let obj5={a:'jspang',b:'技术胖'};
weakObj.add(obj5);
console.log(weakObj);