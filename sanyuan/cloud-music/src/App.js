import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from  './style'  //引入全局样式
import { renderRoutes } from 'react-router-config' //renderRoutes 读取路由配置转化为 Route 标签
import { IconStyle } from './assets/iconfont/iconfont' //引入图标
import store from './store/index'   //注入store
import routes from './routes/index.js'   //引入路由
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes(routes) }
      </HashRouter>
    </Provider>
  )
}

export default App;