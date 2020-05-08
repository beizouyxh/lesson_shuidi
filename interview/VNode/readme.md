tree DOM 树/css 渲染树
 vnode 虚拟结点  virtual DOM 
 JS 原生   js的基础能力important

- Virtual DOM babel AST抽象语法树

<div id="root" >
    <span class="demo">
      This is a span.
    </span>
    <p>DOM</p>
  </div>

  JSON 表达   JS 的原生能力

  html -> js(tree,json)
  json object
  描述性 抽象 别无其他
  JSON 表达对一个结点的抽象
  DOM 文本结点nodeType 结构都一样，屏蔽的最低层文本结点的差异 
  递归算法，
  {
  tag: 'div',  /*标签*/
  attrs: {   /*标签上的所有属性 封装*/  
    id: 'root'
  },
  children: [ 
    {
      tag: 'span',
      attrs: {
        className: 'demo'
      },
      children: [
        {
          tag: undefined,
          text: 'this is span'
        }
      ]
    },
    {
      tag: 'p',
      children: [
        {
          tag: undefined,
          text: 'DOM'
        }
      ]
    }
  ]
}
