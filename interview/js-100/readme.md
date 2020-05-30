
Vue 的响应式原理中的Object.defineProperty 有什么缺陷？
  1. Object.defineProperty 无法监控到数据下标的变化(vue对，但支持push、pop,因为常用操作,)不能实行响应
  2. Object.defineProperty 只能劫持对象的属性，proxy可以代理（劫持）整个对象，并返回一个新的对象
  3. Proxy不仅可以代理对象，也可以代理数组
- Proxy 可以代理整个对象   defineProperty 每个属性单独代理
- 在vue2.0中，definProperty对数组并没有对数组提供完全的数据劫持
  因为有一个前端性能的坑，n empty object数组
  对push pop等数组常用的方法
- 