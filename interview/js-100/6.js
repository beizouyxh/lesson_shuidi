// var arr = [1];
// arr[10000] = 1;  

// // function a() {
// //   console.time();
// //   for (var i = 0; i < arr.length; i++) {
// //     console.log(1)
// //   }
// //   console.timeEnd();
// // }
// // a();


// function b() {
//     console.time();
//     arr.forEach(item => { console.log(2) })   //foreach 先取出item
//     console.timeEnd();
//   }
//   b()


//vue defineProperty 
// defineProperty是可以对数组进行劫持的，不过对新增的数据项没有效果
//对数据进行数据劫持
var arr =[1,2,3,4]
arr.forEach((item,index)=>{
    //对一个属性单独的的数据劫持，get ，set
    Object.defineProperty(arr,index,{
        set:function(val){
            console.log('set');
            item=val 
        },
        get: function(val){
            console.log('get')
            return item
        }
    })
})

arr[1];    //get
arr[1]=1;  //set
arr.push(5)