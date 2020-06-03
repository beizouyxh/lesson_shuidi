import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
//SPA
// ReactDOM.render(
//     <Header />,
//     document.getElementById('root')
// )
//SSR 不需要render 只需要事件
//调和：服务端已经完成，客户端不会重复做
ReactDOM.hydrate(
    <Header />,
    document.getElementById('root')
)