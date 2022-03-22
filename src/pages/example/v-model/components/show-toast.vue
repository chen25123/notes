<template>
  <div class="child-box" v-show="show">
    <div class="child-body" @click.stop="childClick">这是子组件，我显示或者不显示，通过v-model来决定，同时，点击我，可以改变v-model 的值</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
})
</script>

<style lang="postcss" scoped>
.child-box {
  position: fixed; left: 0; top: 0; right: 0; bottom: 0;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  .child-body {
    width: 300px; height: 300px;
    font-size: 24px; line-height: 48px;
    background: rgba(0,0,0,0.6);
  }
}
</style>