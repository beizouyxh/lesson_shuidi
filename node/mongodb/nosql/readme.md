- NOSQL
 mySQL关系型数据库，
 database->table->fields

 NOSQL 不需要写SQL语句
 JSON object{}.save()
 find({}) 适用于碎片化的，结构型并不是很良好的数据存储
 Mongodb 云开发数据库就是线上版的

-     mySQL                      MONGODB
  关系型数据库                NOSQL ex:Facebook 文档型
   show dababases;              show dbs; 
     use db                      use db
     tables;                    collection
     SQL                        JS 语法的面向对象api

- 连接mongodb数据库
 url  mongodb://
- db.createCollection('site',function(err,res){
    //err 出错
    //异步的，耗时的，  js 里执行的代码不会堵塞，
    db.close();
})
  代码顺序
  1. createCollection
  2. db.close();
  执行顺序 
  1. create ->去到mongodb->create->回来跟我说
  2. 接着往后执行

- 数据库，后端开发框架
  express
  node,后端就是app
  app.get('/',(req,res)=>{
      res.send('hello word');
  })
  app.listen(3000,)