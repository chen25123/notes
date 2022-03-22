# Set

  ``` js
  let a = [1,2,3,4,5];
  let b = [2,3,4,5,6];

  let la = new Set();

  function addToSet(...data) {
    for (let i = 0; i < data.length; i++) {
      let lda = data[i];
      for (let j = 0; j < lda.length; j++) {
        la.add( lda[j] )
      }
    }
  }

  addToSet(a, b);

  console.log( [...la] ); // [1,2,3,4,5,6]
  ```

  ... 扩展运算符？？？  解构？？？<br />
  如何理解addToSet(...data)<br />
  
  ``` js
  let a = [1,2,3,4,5];
  let b = [2,3,4,5,6];
  function addToSet(...data) {}
  addToSet(a, b); // 调用的时候发生了什么？
  // rest 参数 可以获取函数多余的参数，取代了 arguments。
  function testParmas() {
    console.log( arguments );
    console.log( arguments[0] );
    // 将 arguments 转换为数组 Array.from(arguments)  或者 解构  let params = [...arguments]
    console.log( Array.prototype.slice.call(arguments) );
  }
  testParmas(a, b)
  // 因为 arguments 是一个类似数组，所以，要先转化为数组， rest参数更加的简洁
  ```

  回归到 set<br />
  set 类似于数组，但是不能有重复的值<br />
  可以用来去重，PS: 我曾天真的想过，用来去重对象，比如 多选车次之后的 坐席展示，需要过滤重复坐席，后来发现不行<br />
  set无法用来做对象的去重，看一个简单的列子
  ``` js
  let la = new Set();
  la.add({});
  la.add({});
  console.log(la.size); // 实际输出是2
  let o = {};
  la.add(o);
  la.add(o);
  console.log(la.size); // 3
  o === o // true
  {} === {} // false
  ```
  对象是个引用类型，特么的存的是地址，不会管你对象里面的内容是啥
  set 有 add delete has clear 4个方法
  ``` js
  la.has({}); // false
  la.has(o); // true
  ```

  size 提供了 keys values entries forEach
  ``` js
  for(let key of la.keys()) {
    console.log( key ) // 1 2 3 4 5 6
  };
  for (let val of la.values()) {
    console.log( val ) // 1 2 3 4 5 6
  }
  for (let [key, value] of la.entries()) {
    console.log( key,value )
  }
  // 1 1
  // 2 2
  // ...
  // 6 6
  la.forEach((key,val) => {
    console.log( key, val )
  })
  // 1 1
  // 2 2
  // ...
  // 6 6
  ```
  
# WeakSet
  弱Set？？
  WeakSet 只能存储对象，但是是个弱引用，既 垃圾回收不会检测 WeakSet 对对象的引用，如果没有其他地方占用，将会被回收

  主要还是想想，它的引用场景
