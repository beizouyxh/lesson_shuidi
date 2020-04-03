const Koa = require('koa');
const app = new Koa();
app.use(async(ctx, next) => {
    console.log(1)
    await next();
    console.log(2)
});

app.use(async(ctx, next) => {
    console.log(3)
    await next();
    console.log(4)
});

app.use(async(ctx, next) => {
    console.log(5)
    await next();
    console.log(6)
});

app.listen(3000);
// 中间件 node express koa web 服务的模型
// req 中间件 res 

// 1. 串联执行
// 2. next() 向后面的中间传递，叠加使用 无线可能
//    发表文章
//       session + route +bodyparsar +error 
//     浏览文章
//       route + 404 bodyparsar
//     app.js index.js nodemon
//     全部摆在那里
// 3. 顺序
// 4. 异步 数据库 模板编译 

// - 如何实现中间件的串联先后执行
// - next
// -