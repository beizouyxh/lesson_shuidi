// // function search(age:number,name:string):string{
// //     //参数要类型，:string返回值
// //    return '找到了'+ age + '岁的小姐姐'+'叫'+name
// // }


// // var result:string=search(18,'小姐姐')
// // console.log(result)


// function search(age:18,name:'吕媛'):string{
//     //参数要类型，:string返回值
//    return '找到了'+ age + '岁的小姐姐'+'叫'+name
// }


// var result:string=search(18,'吕媛')
// console.log(result)

function search(...xuqiu:string[]):string{
   let yy:string='找到了'
   for(let i=0;i<xuqiu.length;i++){
       yy=yy+xuqiu[i]
       if(i<xuqiu.length-1){
           yy=yy+'、'
       }
   }
   yy=yy+'的小姐姐'
   return yy
}


var result:string=search('18','大长腿','瓜子脸','水蛇腰')
console.log(result)