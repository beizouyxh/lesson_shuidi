const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')
    //中间件式
    //分层 
const index = require('./routes/index')
const fs = require('fs');


// app.use(ctx => {
//     ctx.body = fs.createReadStream('dffaf');
// });
app.use(bodyparser({ //表单提交
    enableTypes: ['json', 'form', 'text']
}));
app.use(require('koa-static')(__dirname + '/public')) //提供静态资源服务访问
app.use(views(__dirname + '/views', { //视图模板
    extension: 'pug' //模板引擎
}));
app.use(index.routes(), index.allowedMethods()) //路由访问
    //模块化 COMMONJS
app.use(logger());
onerror(app);
module.exports = app; //向外输出app