var http=require('http');

http.createServer(function(req,res){
    //https://www.cnblogs.com/xsg1/p/10535665.html  mvvm与mvc 两中模式的区别
    //一份代码，满足后端两种需求 
    //1. axios proxy  /api/posts  前后端分离   mvvm  text/json  mode 与 view 通过viewmodel 进行双向绑定
    //2. 传统的后端驱动型开发  html  mysql+套页面  mvc  text/html    model 与 view 分离 通过controller来进行两者的通信
    let posts=[{
        id:'5eb896566fb9a0437b76e6f3',
        title:'如何写出优雅的 JS 代码，变量和函数的正确写法'
    },{
        id: '5eb7ebea5188256d723151fb',
        title: '给前端工程师的一张Dart语言入场券'
    }]
    if(req.url === '/posts'){    //url  请求行（
        if(req.headers['content-type'=='text/json']){    //头部信息
            //api 很灵活
            res.end(JSON.stringify(posts));
        }else{
            //后端自己建一个站
            let postHTML=posts.map(post=>`
              <li>
                 ${post.id}
                 ${post.title}
              </li>
            `).join('')
            res.writeHead(200,{'content-type':'text/html;charset=utf8'})
            res.end(`
              <html>
                 <head></head>
                 <body>
                    <ul>
                      ${postHTML}
                    </ul>
                 </body>
              </html>
            `)
            
        }
     }
    res.end('hello word');
}).listen(1234);