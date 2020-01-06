- Koa 是最流行的node 轻量级框架
  egg.js 基于Koa的二次开发
- Koa new ->app ->listen
 /bin/www 
 www文件就是网站项目的启动文件
 http.createServer(app.callback())  创建一个服务

- 模板
  views  
  koa-views()
  app.use()启用views中间件
  模板在哪?使用何种模板引擎pug

- 路由
  routes/index.js
  koa-routes()  .get post
  index.routes()
  app.use()

- logger 
  安装koa-logger use使用一下

- 出错模块onerror
- https://img.bosszhipin.com/
  https://www.zhipin.com/job_detail/1c491d20c1ddd7f50nZ409y6GFY~.html?ka=comp_joblist_5
  静态资源 服务器端资源
  IP 
  静态资源  img.bosszhipin.com
  dns域名解析 网络供应商有解析列表
  公司会在网络供应商机房里去装一些cdn机器  本地没有？会去中央服务器里请求一次，然后缓存到本地（机房）

- koa-static

- 表单提交
  koa-bodyparser
  GET   请求头里 head GET
  url?a=1&b=2  适合明文请求
  POST   head url body.length + body


## node的发布
docker 容器化

node 项目，写完后，测试工程师(环境？)
让项目在不同的机器上面里，享用相同的环境跑起来   只要安装docker

  