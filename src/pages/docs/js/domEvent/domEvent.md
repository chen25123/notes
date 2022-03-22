# DOM事件流的三个过程

  ```
    1.捕获阶段
    2.处于目标阶段
    3.冒泡阶段
  ```
  [domEvent](domEvent)
# 先看一层数据


 ```
 <!DOCTYPE html>
 <html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1,viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>DOM事件流</title>
  </head>
  <body>
    <div id="ppp">
      level-1
    </div>
    <script type="text/javascript">
    var vp = document.getElementById('ppp');
    vp.addEventListener('click', function () { console.log('父节点捕获'); }, true);
    vp.addEventListener('click', function () { console.log('父节点冒泡'); }, false);
    // 这里console的顺序其实是按照事件注册的顺序console的
    // 当处于目标阶段的时候
    // 既 e.target（触发事件的元素） = e.currentTarget（当前事件位子对应的元素） 时，并不是按照先捕获后冒泡的顺序来执行
    </script>
  </body>
 </html>
 ```

 # 然后来看看两层的时候

  ```
  <!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1,viewport-fit=cover">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <title>DOM事件流</title>
    </head>
    <body>
      <div id="ppp">
        level-1
        <div id="child-leve-1">
          level-2
        </div>
      </div>
      <script type="text/javascript">
      var vp = document.getElementById('ppp');
      var vc1 = document.getElementById('child-leve-1');
      vp.addEventListener('click', function () { console.log('父节点捕获'); }, true);
      vp.addEventListener('click', function () { console.log('父节点冒泡'); }, false);
      vc1.addEventListener('click', function () { console.log('一级子节点冒泡'); }, false);
      vc1.addEventListener('click', function () { console.log('一级子节点捕获'); }, true);
      // 这里 点击child-level-1 的时候 console的顺序

      // 父节点捕获
      // 一级子节点冒泡
      // 一级子节点捕获
      // 父节点冒泡

      // 原因 是 因为父元素不是点击元素（e.target 指向的是 子元素，所以，父元素不可能出现 e.currentTarget == e.target 的情况），则按照 DOM事件流来
      // 而 子元素因为 e.target === e.currentTarget ，所以按照事件的注册顺序来执行

      </script>
    </body>
  </html>
  ```