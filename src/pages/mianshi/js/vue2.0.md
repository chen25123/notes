# vue是怎么将template转化为html的？
  在beforeMount之前执行编译过程，第一步通过html-parser将template解析成ast抽象语法树，第二步通过optimize优化ast并标记静态节点和静态根节点，第三步通过generate将ast抽象语法树编译成render字符串并将静态部分放到staticRenderFns中，最后通过new Function(render)生成render函数。在beforeMount和mounted之间执行render函数生成VNode，然后通过patch(VNode)生成dom树并挂载，调用mounted。

# vue是如何实现数据驱动的？

  vue 会遍历data属性，通过 Object.defineprototype 为每个属性配置 set/get。每个组件又都有一个 watcher 监听，他会为属性创建依赖，当 set 被触发的时候，就会通知 watcher，然后watcher通知依赖，从而更新页面。
  
##  延展一 ，为何 data里面的对象中的某个引用类型的值变化了，无法触发更新？
  因为vue只遍历了 data 的属性做了 defineprototype，加上某对象内部的值变化，不会导致引用类型地址的变化，所以在vue看来，该值没有变化，所以，对象内部值变化无法触发更新。
  可以通过vue内置的$set函数来为对象/数组赋值，来触发 页面更新。

## 延展二，vue是如何对数组 的 push等做到响应的？
  vue对数组方法做了封装，封装的数组方法主要是 改变自身的几个 有 (push, splice,shift,unshit,pop,sort,reverse), 
  首先获取了数组的 observe对象， 如果有多个参数，则还需要调用 observeArray 来处理，最后在手动调用notify 来通知 watcher

# Computed 和 Watch  
  computed 更多的是作为一个属性来使用，而watch更多的是作为一个观察者，两者的应用场景不同，
  computed 支持缓存，他的值依赖某个已有的属性，当其依赖的属性变化时，他才会变化，他的结果会被缓存， 不支持异步
  watch 当某值发生变化，就执行某些操作，支持异步

## 延展一 为何computed 不支持异步？
  强行解释，computed一定有一个 return，而这个返回的值，被用来当做当前作用域的一个属性了，return 不会等待异步的结果，
  也无法 return 一个异步出去，因为他的输出就是要一个 值，或者对象，或者数组。

# $nextTick
  表象就是当dom渲染完成之后执行， 实现机制，其实是一种事件队列的机制。在队列执行完毕之后，就会调用nextTick，类似于 事件轮循  eventLoop
