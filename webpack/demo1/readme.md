- es6 node babel loader
- 前端生产工艺 CI CD
- src 开发目录
  入口文件  main.js
  webpack bundle

- JS文件与其他文件并不是水火不相容的
  1. 文本
  2. {}


 yarn add webpack-cli -D
 yarn add webpack -D
 yarn add cross-env工具
- webpack 如何让js 理解css
- webpack 4 decDenpendencies
- webpack 用到哪些依赖呢
- webpack 
1. cross-env NODE_ENV=development
  可以屏蔽windows linux mac的环境变量
2. 最小执行单元
  entry output mode
  webpack webpack.config.js 配置
3. rimraf删除目录
4. 添加loader
  webpack  工厂流水线
  不能理解的文件css .styl .vue
  loader 能理解的地方，去处理