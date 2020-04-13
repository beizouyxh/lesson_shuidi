# react ts

webpack-dev-server  webpack编译  同时，启动live-server  http服务
 start Dev
 webpack 编译  nginx docker 阿里云  build node

yarn add webapck webapck-cli webpack-dev-server
yarn add bootstrap
yarn add @babel/cli @babel/core @babel/preset-env babel-loader
yarn add awesome-typescript-loader typescript
yarn add html-webpack-plugin
yarn add mini-css-extract-plugin
yarn add css-loader
 yarn add react react-dom
 yarn add @types/react @types/react-dom
 1. --inline  --hot 
    热更新，让我们的页面做到局部更新 不丢失组件状态  MVVM  
    vue mounted data
   刷新浏览器--inline
   重新加载改变的部分--
2. hash 是什么
   文件版本，app.feeffafaff1.js demo
   feeffafaff1.[hash].css
   静态文件会缓存 app.[hash].js?3  old new
3. babelrc presets env modules
4. entry 多入口的作用是
  entry 从某个文件require import webpack  __require__
  单点入口，组织起来一个依赖问题 业务常改变，hash 需要，通知客户端更新
  把几个月，永远不更新的文件 作为独立的入口
  entry 可以有多个打包的入口吗？ 为什么
  vendor 库 vue.js vuex vue-router
  提升了编译速度，同时保障及改善了用户的浏览体验 缓存
