# http

  http 超文本传输协议，是一个基于 ftp网诺协议用来做数据传输的。<br />
  数据都有哪些呢？
  1. 静态资源 - 固定的，比如 html页面，图片，音视频，文件等等
  2. 动态资源 - 动态的，可以理解为 接口(api)

  数据的类型
  MIME 具体是啥不清楚，一个邮件扩展，被用来做类型区分，， 推测是 content-type
  比如 html 就是 text/html
  jpg 就是 image/jpeg
  ACSII 就是 text/plain
  当然还有 application/json

  那么http如何定位数据呢？
  通过 URI URL 
  URI 统一资源标识符
  URL 统一资源定位符
  URN 统一资源名

  他们有什么区别呢？
  URI 是统称 URL和URN都是 URI的 子集(具体表现形式？)
  URL 通过一些关键描述定位一个资源 这些关键描述是 协议://用户名:密码@主机:端口/路径;参数?查询#片段
  URL 的缺点是，当资源移动之后(比如路径变换),将无法获取资源
  所以，就提出来URN，URN的核心思想是，每个资源有一个固定的名字，然后有个服务(或者服务器)来记录和处理 名字 - 真实路径  的映射关系。
  soso，现在URN只是个ppt。

  http方法，8种，就不一一列举了 post get

  状态码 200 302 404 500 502

  请求包含的内容
  请求行
  请求头
  实体

  响应包含的内容
  响应行
  响应头
  实体

  请求行一般会有 
  url       资源的url
  method    请求资源所使用的的 方法
  status    请求的结果 100-199 信息 200-299 成功  300-399 重定向 400-499 客户端错误  500-599 服务端错误

  请求头
  accept 告诉服务器能够使用的媒体类型
  content-type   这个资源的类型

  响应头
  跨域配置之类的

  实体 可以为空
  请求，一些参数之类的
  响应，具体的资源

  http方法
  get 向服务器请求某资源
  post 向服务器发送一些数据
  put 向服务器写入文件
  delete 删除服务器上的某文件，服务器可以不理会
  head 响应只返回头部
  options 返回服务器支持的方法 （get post 之类）
  trace 代理记录，这个有点复杂，服务器收到请求是，会立即回发一个响应，该响应描述了 http协议在被代理的时候所有的变化？？？

  get相对不安全，有大小限制
  post相对安全没有大小限制


  web服务
  其实都可以做两部分的事情：
  1.解析http协议，
  2.运行对应的代码 (比如 java 的 tomcat 和 php 的阿帕奇  还有c#的iis)

  代理
  一个帮忙转发请求的服务器
  正向代理 & 反向代理  发生侧 不同

# 是如何工作的呢？

  通过一个url，客户端向服务端发送一个http请求
  发送的请求包含3个部分
  1. 请求行
  2. 请求头
  3. 数据

  请求行，url信息啊，method信息之类的，用来说明 这个http请求的基本信息，告诉服务器该以什么样的方式处理这个请求
  请求头，就是 request header

  具体发生了什么？
  浏览器通过url 解析 ip以及端口
  建立tcp链接
  发送http请求
  接收http响应
  关闭链接


# 闲话

  c/s b/s c端 b端

  c/s 客户端 - 服务器 通俗点的翻译就是  软件 - 服务器
  b/s 浏览器 - 服务器 通俗点的翻译就是  网页 - 服务器
  PS: 后面在看到这里，可以深究一下，他们在网诺数据传输方面的方式。


  c端 个人用户
  b端 企业用户