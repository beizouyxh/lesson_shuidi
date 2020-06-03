# PC 端扫码登陆方案，并需要传递哪些消息
1. 二维码 一段信息的图片 node qrcode 生成
2. 微信App 手机微信登录了，扫码
  - 手机App 微信、github、QQ 已经登录（前提） cookie(token) 
  轮询： 过一段时间自动刷新 ，安全问题
       把头像，id,用户名 放到 二维码里，等待着头像，id,用户名（发送ajax请求）
       1. 二维码里mongodb存 qrcode_id time expires
       2. 手机扫码时，已登录，有个token 把token给二维码， 手机端会触发一个ajax post请求到服务端，token qecode_id解析用户的user_id
       3. mongodb 二维码，登录中，user信息，token也传给pc页面，也登陆成功了
       4. 跳转，已登录成功
  - 扫一下 APP里 用户头像，id,登录状态 都传到了 PC端
  - 结果是PC站登录了 
     服务器端要认识你是谁，token oAuth代替 cookie
  

  1. node 插入一条qrcode 记录{qrcode_id,expires_at,creat-at} 生成一个二维码图片
  2. PC端的登录页，二维码，显示出来
  3. 扫码 得到qrcodeID 使用postman 模拟