// 云函数入口文件
var cloud = require('wx-server-sdk');
var rp=require('request-promise');  //npm 各API发出请求
cloud.init();

exports.main=async(event,context)=>{
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=350ef9817a9e941a7cceabc8c4615439`);
  var res=rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=350ef9817a9e941a7cceabc8c4615439`).then(html=>{
    return html;
  })
  return res;
}