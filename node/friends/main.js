//- web服务器
var mysql=require('mysql');
//取出mysql 数据
// - 连接 mysql
// - 执行sql 查询
const http=require('http');//node 内置模块
const fs=require('fs');
var connection =mysql.createConnection({
    host:'192.168.31.128',
    user:'root',
    password:'1234567890',
    database:'batschool'
})
connection.connect();

const server=http.createServer((req,res)=>{
    //www.baidu.com  ->ip   req(require)用户   res(响应对象)
    //res html http协议
    //res.end('hello word');
    if(req.url=='/'){
      fs.createReadStream('index.html').pipe(res);  
    }else if(req.url=='/students'){
        connection.query('SELECT * FROM students',function(error,result,filed){
            if(error){
                console.log(error);
                return;
            }
            console.log(result);
            const data=result;
            res.writeHead(200,{'Content-Type':'text/json;charset=UTF8'})  
          //响应=响应头+响应体
        res.end(JSON.stringify(data))   //数组字符串化
        })
        
        
    }
    
})

server.listen(1314);