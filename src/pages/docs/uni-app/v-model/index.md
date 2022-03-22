# 自定义组件使用 v-model 踩坑了

  by:chenxj25123<br />

  在vue的文档中，对于 v-model 的描述是，可以在表单元素上使用,创建双向的数据绑定。但其本质上是语法糖。

  `v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
  - text 和 textarea 元素使用 `value` property 和 `input` 事件；
  - checkbox 和 radio 使用 `checked` property 和 `change` 事件；
  - select 字段将 `value` 作为 prop 并将 `change` 作为事件。

  如何理解v-model是一个语法糖，看下面代码，两种写法的效果其实是一样的。

  ``` js
  <input v-model="name" type="text" />
  <input :value="name" type="text" @input="changeName">
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      changeName(e) {
        this.name = e.target.value;
      },
    }
  }
  ```

  接下来说一下如何在自定义组件中使用`v-model`,[demo](./#/pages/example/vmodel)；

  ``` js
  name: 'ChildDom',
  props: ['show'],
  methods: {
    childClick(): void {
      this.$emit('change', false);
    },
  }
  ```
  ``` html
  <ChildDom :show="isShowChild" @change="isShowChild = $event"></ChildDom>
  ```

  `v-model`的写法：
  ``` js
  // vue2.0
  name: 'ChildDom'
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean
    }
  },
  methods: {
    childClick(): void {
      this.$emit('change', false);
    },
  },
  ```
  
  ``` html
  <ChildDom v-model="isShowChild"></ChildDom>
  ```

  接下来是问题，在`uni-app`中，以上代码是不生效的，如果要使其生效，需要改变一下model里面的东西；

  ``` js
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Boolean
    }
  },
  methods: {
    childClick(): void {
      this.$emit('input', false);
    },
  },
  ```

  uni-app的官网并没有给出解释，并且，uni-app里面，关于 v-model的用法，和vue3.0的写法相同，下面贴一串`uni-app`的v-model写法;

  ``` js
  name: 'ChildDom'
  model: {
    prop: 'show',
    event: 'update:show'
  },
  props: {
    value: String,
    show: {
      type: Boolean
    }
  },
  methods: {
    childClick(): void {
      this.$emit('update:show', false);
    },
  },
  ```

  ``` html
  <ChildDom v-model:show="isShowChild"></ChildDom>
  ```

  写到这里了，就顺便看一下 vue2.0 的 `.sync` 吧。

  ``` html
  <ChildDom :show.sync="isShowChild"></ChildDom>
  ```

  ``` js
  // 子组件
  name: 'ChildDom',
  props: ['show'],
  methods: {
    childClick(): void {
      this.$emit('update:show', false);
    },
  }
  ```