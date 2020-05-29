
## BEM


## css-module   vs  scope
scope: .vue 组件帮你处理了 css 模块化

命名冲突
.main .wrap .button 

```css
css 模块化
@import 
```
<style lang="" scope></style>

```js
loader: 'css-loader',
options: {
  modules: {
    mode: 'local',
    exportGlobals: true,
    localIdentName: '[hash:base64]',
    hashPrefix: 'my-custom-hash',
  },
},
```

```css
._23_aKvs-b8bW2Vg3fwHozO {
  background: red;
  color: yellow;
}

._13LGdX8RMStbBE9w-t0gZ1 {
  background: blue;
}
```
只在当前组件生效：
<div data-v-00e8ca52="" data-v-6fdc8784="" class="view timeline-index-view">
.container .view.timeline-index-view[data-v-00e8ca52]