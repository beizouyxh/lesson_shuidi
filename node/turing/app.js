const TULING= require('tuling');

const aiTuling =new TULING({
    key:'40e774ff3d1d4798aa9fb84c53151aa3'

});
//立即执行函数
(async()=>{
    //机器人
   // Console.log('arrow function') 
   const result = await aiTuling.send({
       userid: 1,
       info:'你是傻子吗',
       loc: '南昌市'
   });
   console.log(result);
})() 
//console.log(func);
//func();