## CORS

响应头：
 
    - 简单请求 ： 用html标签可以构造出来的
    - 非简单  1. 预检请求 试探允不允许  2. 真实的请求


1. Access-Control-Allow-Origin
Access-Control-Allow-Origin头中携带了服务器端验证后的允许的跨域请求域名，可以是一个具体的域名或是一个*（表示任意域名）。简单请求时，浏览器会根据此响应头的内容决定是否给脚本返回相应内容，预先验证请求时，浏览器会根据此响应头决定是否发送实际的跨域请求。

2. Access-Control-Expose-Headers
Access-Control-Expose-Headers头用于允许返回给跨域请求的响应头列表，在列表中的响应头的内容，才可以被浏览器访问。

3. Access-Control-Max-Age
Access-Control-Max-Age用于告知浏览器可以将预先检查请求返回结果缓存的时间，在缓存有效期内，浏览器会使用缓存的预先检查结果判断是否发送跨域请求。

4. Access-Control-Allow-Credentials
Access-Control-Allow-Credentials用于告知浏览器当withCredentials属性设置为true时，是否可以显示跨域请求返回的内容。简单请求时，浏览器会根据此响应头决定是否显示响应的内容。预先验证请求时，浏览器会根据此响应头决定在发送实际跨域请求时，是否携带认证信息。
  - 设置为false  拿不到前端传过来的cookie

5. Access-Control-Allow-Methods
Access-Control-Allow-Methods用于告知浏览器可以在实际发送跨域请求时，可以支持的请求方法，可以是一个具体的方法列表或是一个*（表示任意方法）。简单请求时，浏览器会根据此响应头的内容决定是否给脚本返回相应内容，预先验证请求时，浏览器会根据此响应头决定是否发送实际的跨域请求。

6. Access-Control-Allow-Headers
Access-Control-Allow-Headers用于告知浏览器可以在实际发送跨域请求时，可以支持的请求头，可以是一个具体的请求头列表或是一个*（表示任意请求头）。简单请求时，浏览器会根据此响应头的内容决定是否给脚本返回相应内容，预先验证请求时，浏览器会根据此响应头决定是否发送实际的跨域请求。 
## JSONP

1. 流程
2. 封装成Promise