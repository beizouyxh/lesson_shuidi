- web 交互的数据格式是什么？  有没有方法在用户请求时提供多种数据返回格式的选择？
  ajax json / html 
     传统的浏览器  text/html
     动态web ajax text/json
     mvc  mvvm  请求头分析

- 计算机网络这块的知识点，做好的历史课
    1. 为什么http createServer  calback   req+res 表达出来呢？
       浏览器n和服务器1之间的通信  PHP/node  基于HTTp协议
       HTTP协议构建于TCP/IP协议之上 网络应用层协议，
       HTTP 0.9版本（1991）为了学术交流在网络之间传输Html 超文本内容   采用了请求和响应模式
       Tcp 安全连接管道进行的三次握手
        - HTTP基于TCP/IP协议 要传输客户端 IP地址(DNS domain)，端口，三次握手建立起连接
          物理层、数据链路层、网络层、运输层(TCP/IP)、会话层、表示层和应用层(HTTP)
          dns（域名查找） 递归查找过程
          浏览器缓存  ->  host 文件 ->  运营商 -....->美国
          三次握手  res req 双方都有发送和接收数据包的能力   ack表示验证字段    syn位数置1，表示建立TCP连接 
              1. brower syn(seq+j) SYN_SENT   同步序列序号
              2. ack=j+1 发送给你  同时发送自己的seq=k
              3. brower establised 状态 ack=k+1
               
          https://blog.csdn.net/KAIKAI_ING/article/details/83009294   三次握手 四次挥手

  四次挥手 断开连接    1: n 
    放送完请求后
    1. A  -> TCP 发送完毕   B    FIN 报文
    2. B 接受到 不会立即用FIN 报文回复主机A, 主机A发送一个确认ACK, 同时通知自己相信的应用程序， （防止A 多次发送FIN）
    3. TCP向A发送FIN 报文
    4. A 收到FIN 报文， B ACK  表示彻底释放 
    请求行  GET    /posts
    0.9 版本中连请求头请求体都没有  连接a  html 文本

1.0 版本
  微软， IE
  1994年 10岁 支持多文件下载 
  text/html 0.9    image/png   text/css   text/js
  accept: text/html
  accept-encoding: gzip 
  accept-Charset utf-8
  accept-language: zh_CN
  请求体  POST 
  状态码  202 503
  Cache 机制   Last Modify 
  userAgent ? 有什么用？ 判断用户的浏览器类型啊
  在业务开发中， 很重要， 
  - 通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计  PC/mobile 。
  iphone/android  手机网站
  - logs日志处理  阿里下单的 30% iphone 用户花了70%的钱


1.1 版本


  2. 在哪个HTTP版本中支持 png的解析
  3. 雪碧图 http 请求， 合并到一张背景图上， 前端性能优化技术， 为什么在现在不考了？ 哪个http版本里
  4. userAgent 在哪个版本出现
  5. 哪个版本极大的提升了下载速度了下载速度