虚拟DOM（vue/react 提升页面性能） + 算法Tree（二叉树，二叉搜索树，平衡树，红黑树...） +  重绘浏览器工作原理

如果下载css文件堵塞了，会堵塞DOM 树合成吗？会堵塞页面的显示吗？
答案：不会堵塞DOM树的合成，但会堵塞页面的显示
     不同阶段


webpack?  从url -> download html document   -> 解析出来页面   分阶段
webpack 工作流，不同的阶段 -》 打包输出dist.js   网页的显示也一样
1. DOM 树的合成     看不到页面，在内存中
2. 页面的显示，重绘，重排(css 处理有关)
   浏览器把页面展示出来（绘制出来），工作流程
 - 入口是什么？   页面绘制的入口  index.html  网络子进程 Buffer
   resolve:['.html','.js','.css']
   html超文本标记语言    <p>渲染流程</p>
   dom 有标签结点（document.createElement），文档结点(document.createTextNode)
   css 层叠样式表  stylesheet    p {color:red}
   js javaScript   p.style.color="gray"

   页面解析是从document 文档开始的，网页是空白的，DOM树没形成，渲染树更没有，布局，样式，js event loop都没有

   webpack 中rules ，渲染通过最初的html 文档内容，进行分别处理
   为什么有标签就可以吗？

 - 不同的类型的文件，不同的loader
   每个阶段？
   类比：
   webpack
   - 开始每个子阶段有输入的内容  .styl  .css   .png  .ts
   - 对其进行相应的处理  loader
   - 每个阶段生成输出内容   bundler.js
   上一阶段的输出，会成为下一阶段的输入   bundle,js
 - 输出是什么？
  
  页面渲染的过程
 1. 构建DOM树， 在内存中构建
    因为浏览器没办法理解HTML 格式，
    是一个编程的过程，  数据结构(tree) + 算法(css selector js querySelector 查找效率，什么树来解决？ 二叉搜索树BST)
 2. 添加css 属性
 3. 计算每个节点的大小  绘制的过程

