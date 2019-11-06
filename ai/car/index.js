// fileSystem 内
const fs = require('fs');
// console.log('hello node');
const AipImageClassifyClient = require
("baidu-aip-sdk").imageClassify;
//图片字符串化
const image = fs.readFileSync("car.jpg").toString("base64");
//console.log(image);
// AipImageClassifyClient
const client = new AipImageClassifyClient  //实例化对象
('17711751','O8fTLI8WCHWWp3kAP93Cu9vj',	
'eb7mmmKFS35b6nEKTNnbKMs7VaGEgPWq');
client.carDetect(image).then(function(result){   //调用方法
    console.log(result);
})



// //回调函数 
// //文件在哪？磁盘里
// //JS文件在哪里运行？内存  I/O操作
// fs.readFile('text.txt',function(err,data){
//     if (err){
//         return console.error(err);  //如果有错，打印错误
//     }
//     console.log(data.toString());

// })