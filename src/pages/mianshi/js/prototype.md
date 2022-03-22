# 原型

  每一个函数都会自带一个 prototype 属性，该属性指向这个函数的原型，函数的原型是一个对象,叫原型对象。
  当一个函数被实例化之后，就是一个对象，对象自带一个 __proto__ 属性，该属性 指向 函数的 原型对象，这就是 原型链。

  这里探讨一个场景: 一个实例 的 原型对象被修改之后，实例会不会发生变化？
  实例自身的属性不会发生变化，但是 原型链上的属性会发生变化。
  ``` js
  let la = { a: 1 }
  function lb () { this.b = 1 }
  lb.prototype = la;
  let expLb = new lb();
  expLb.a = 2;
  console.log(la.a) // => 1
  ```

  这里顺带讲一讲  typeof 和 instanceof

  typeof只能判断基本类型，对引用类型都是 object
  instanceof的原理是原型链，在原型链上，则返回true，不在则返回false

  判断类型的 几种方法
  Array.is() // 是否数组
  toString.call()
  typeof xx  // 只能判断值类型
  xx instanceof object // 只能判断 引用类型
  isNaN() // 判断是否有效数字  '0' 0 false 均会被认为是数字

# 继承

  ``` js
  function Animal() {
    this.name = '';
  }
  Animal.prototype.run = function () {
    console.log(this.name + ' is run!');
  }
  // 通过原型链继承
  function Cat() {}
  Cat.prototype = new Animal();
  let cat = new Cat();
  cat.name = 'jim';
  cat.run(); // jim is run!
  // 为原型新增 属性
  Animal.prototype.age = 0;
  // cat.age = 3;
  console.log(cat); // 此时cat.age 是0,说明，当原型链的顶端修改之后，子类也改变了
  // 构造继承
  function Dog() {
    Animal.call(this);
  }
  let dog = new Dog();
  // dog.name = 'hanmm';
  // dog.run()
  console.log(dog); // 有name 但是没有 run函数， 因为 构造继承只能继承 父类的 实例属性和方法，不能继承 原型链上的
  // 实例继承
  function Pig() {
    let pig = new Animal();
    pig.wuluwa = 'asdsd'; // 这里新增的属性只有 子类有
    return pig;
  }
  let pig = new Pig();
  Animal.prototype.sleep = function () {
    console.log(this.name + ' is sleep!');
  }
  // 此时 pig 也可以访问 sleep，既 这种方法继承到 父类的原型链
  console.log(pig); // 返回的就是 animal 的实例,好吧， 这也算是继承吧,这个没啥好看的
  // 拷贝继承
  // 这个我都懒得写例子了，就是吧父类的属性 挨个 复制给子类，先将父类实例化，然后 for(let keys in object) 遍历赋值
  // 组合继承
  // 就是 原型链继承和构造函数继承的结合
  // 寄生组合继承
  // 啊，这个有点点复杂
  function Bird() {
    Animal.call(this);
  }
  (function() {
    let surpe = function() {};
    surpe.prototype = Animal.prototype;
    Bird.prototype = new surpe();
  })()

  let bird = new Bird();
  Animal.prototype.fly = function() {
    console.log(this.name + 'is fly!');
  };
  console.log(bird); // 可以访问fly
  // es6
  class People {
    constructor() {}
  }
  class Jim extends People{
  }
  ```