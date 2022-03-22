# Object.create
  ``` js
    let la = { a:1, b:2 }
    let lb = Object.create(la);
    console.log('lb:', lb, '-/-', lb.a); // lb: {} -/- 1
    lb.a = 2;
    console.log('la.a', la.a); // 1
    la.c = {val:1};
    
  ```
  <br />
  q. 在googleF12中为何lb输出{} 是空的，点击向下箭头，出现[Prototype]，再次点开，出现 a,b？<br />
  a. 因为Object.create 是将lb 的 __proto__ 指向了la，相当于，lb继承于la， ab是la的属性，而不是lb的，但是使用 lb.a的时候，会去原型链上面找，所以，最后拿到的其实是 la.a 的值。<br />
  q. 设置了lb.a = 2 之后，为何la.a依旧是1？<br />
  a. lb.a = 2是为lb增加了a属性，并且赋值2，而不是改变了la.a 的值，原型链相关知识。<br /><br /><br />
  
# Object.assign

  ``` js
  lb.c = 3;
  let lc = Object.assign({}, lb, la);
  console.log('lc:', lc); // lc: { a:1, c:3, b:2 }

  ```

  q. 为何lc.a是1，排序是 acb呢？<br />
  a. assign作用是拷贝，可以这样理解，首先 lc = {}，然后将lb拷贝到lc中，变成 { a:2,c:3 }, 然后再拷贝la ，此时发现 a属性已经有了，la.a的值会覆盖已有的a属性的值，并不会新增一个a属性，所以，最后变成了 { a:1, c:3, b:2 }<br /><br /><br />

# Object.getPrototypeOf
  
  ``` js
  console.log( Object.getPrototypeOf(lb) ) // { a:1, b:2 }
  ```
  获取此对象原型链上的属性 所以，返回的是la的 属性<br /><br /><br />


# Object.getOwnPropertyDescriptors

  ``` js
  console.log( Object.getOwnPropertyDescriptors(lb) )
  ```
  返回对象的自身属性的描述符<br /><br /><br />

# Object.defineProperty

  ``` js
  let o = {}
  Object.defineProperty(o, 'a', {
    value: 11,
    configurable: true,
    enumerable: true,
    writable: true,
  })
  ```

  数据描述符？？ configurable enumerable writable value<br />
  读取描述符？？ configurable enumerable get      set<br />

  主要是 get 和 set<br />


# Proxy

  

