import express from 'express'
import Header from '../components/Header.jsx'
import React from 'react'
import {renderToString} from 'react-dom/server'
const app=express();


app.use(express.static('static'))
app.use('*',(req,res)=>{
    const App=(<Header />)
    //jsx->babel -> react.createElement
    const htmlStr=renderToString(App)
    console.log(htmlStr)
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root">${htmlStr}</div>
        //发请求：localhost:3000/index.js    文件 是前端的打包代码
        //浏览器执行起来
        //hydrate 绑定事件
        <script src="/index.js"></script>
    </body>
    </html>`)
})

app.listen(3000,()=>{
    console.log('server id running 3000 port')
})