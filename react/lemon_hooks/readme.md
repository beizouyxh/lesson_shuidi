1. sourcemap
2. --inline?
3. polyfill
4. css处理
5. react 新特性带来的fragment

--save-dev
react/vue开发，   /dist目录，  给后端或自己docker nginx 服务代理

js的责任  babel 补丁
@babel/cli @babel/core  @babel/preset-env @babel/polyfill --save-dev
- ployfill  https://cdn.bootcss.com/js-polyfills/0.1.42/polyfill.js文件
fill填充   poly一些特性
es6  低端浏览器可以被支持？
两种功劳 1. babel-preset-env+babel-core 降级处理
 const let var ()=>{}   function(){}
 2. polyfill会把一些无法降级 Promise Array Map reduce
   手工实现一下  垫片,手动添加了script  src=polyfill.js 浏览器从不具备这个功能到拥有了
   if(typeof Object.create  !=="duncction"){}
   在实现polyfill 做判断，不是要给所有的浏览器都做同样的打补丁
   在打补丁之前先判断浏览器是否拥有此功能
   polyfill.js 打包到bundle.js之中，  babel preset target
3. plugin


inline  hot区别
webpack-dev-server --mode development --inline --hot --open
inline hot 都是改变后 刷新内容，inline强制刷新，弊端是MVVM状态会丢失
hot hmr hot module reload --inline --hot 如果是hmr 部分更新 hot
如果不是hmr 部分，inline强制刷新

css
  1. style  ->  .css输出
     MinicssextractPlugin
  2. 编译时 css压缩
  3. 如何调试bug  p  color:xxxx;
    style-loader 开发的时候
    定位p color错误，style代码很多，但是你找不到它在哪里