- npm init -y 项目的初始化
   java 一样来做后端  企业级开发框架
   npm init egg --type=simple

- app
   node 应用程序的主要代码
- config
   配置文件夹
- test 测试目录

 

- egg 架构
  脚手架快速构建项目框架
  web http协议
  router.js 配置了路由
  ->controller (ctx.request.body)
  ->model 

- npm i sequelize-cli -D
  -D? devDependenices
   开发阶段的依赖  mysql 的处理
   创建表
   执行SQL
   sequelize-cli  command-line 命令行


- sequelize 命令行集锦
  sequelize init 初始化mysql的工作目录
   - config.json
  sequelize db:create
  创建一个表 