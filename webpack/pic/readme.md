# webpack 打包一切静态资源

add webpa, webpack-cli, webpack-dev-server ,html-webpack-plugin
yarn start

webpack loader手写

## webpack 为web 应用工作
- 入口核心文件 .js文件 放在底部加载
  dev
1. css-loader   style-loader 的区别？
  js引入css
  webpack建立依赖关系 
  import require  path extension
  ext =》 loader 对应的
  package.json  分析 报错
2. use 定制性 webpack不是用来学的，是用来用的，用来修的
  webpack考点多半出你是否会修
  loader
  js处理css
  web应用而来  style  行内样式  <style></style>
  css引入  <link> 
  css-loader 为css 后缀解析，以及css内的@import 外部资源
  style-loader  样式插入到DOM中
  - picture 有web应用的需要
    base64何时启动?      base64减少的请求的数量 优化的性能 
    但是导致js体积暴增，加载慢   上限
