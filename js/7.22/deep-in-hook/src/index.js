import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// 组件每次重新 render的时候，从第一行 执行最后一行
// 每次执行 明明 useState(0); 以 0 作为默认值，为什么每次 render 都能拿到上一次的 state
// 解决办法 闭包
let hooks = [];
let currentIndex = 0
let _state;
function getHookState(index) {
  // 扩容
  if (index >= hooks.length) {
    hooks.push({});
  }
  return hooks[index];
}
function MyUseState(initState) {
  _state = _state || initState;
  function setState(newState) {
    _state = newState;
    // 重新更新页面
    render();
  }
  return [_state, setState];
}
// 回调要不要执行 看依赖 有没有变
// 这一次的依赖 和 上一次 进行对比
let _deps = {
  args: null    // 上一次依赖 
}
function MyUseEffect(callback, args) {
  const hasChangeDeeps = args && args.some((arg, i) => _deps.args && arg !== _deps.args[i]);
  // 没有依赖 || 依赖变化了
  if (!_deps.args || hasChangeDeeps) {
    callback()
    _deps.args = args;
  }
}
// react 用链表存储 多个 hook 的状态 { s } => { s1 } => { 上一次的依赖 }
// preact 采用数组 
function Count() {
  const [ s, setS ] = MyUseState(0);
  const [ s1, setS1 ] = MyUseState(0);
  MyUseEffect(() => {
    console.log('effect');
  }, [Math.random()])
  // 依赖
  // [] [] [] [] []
  return (
    <div>
      { s }
      -
      { s1 }
      <button onClick={() => {
        setS(s + 1);
      }}>+</button>
    </div>
  )
}
function render() {
  ReactDOM.render(<Count />, document.getElementById('root'));
}
render();