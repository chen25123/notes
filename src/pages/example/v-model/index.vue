<template>
  <div class="text">
    <p @click="showChild">这里是父组件，当点击我的时候，会弹出一个浮层，现在的model值为： {{ isShowChild }}</p>
    <ShowToast v-model:show="isShowChild"></ShowToast>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ShowToast from './components/show-toast.vue'

type dataType = {
  isShowChild: boolean
}

export default defineComponent({
  components: {
    ShowToast
  },
  data(): dataType {
    return {
      isShowChild: false,
    }
  },
  methods: {
    showChild(): void {
      this.isShowChild = true;
    },
  },
})
</script>

<style lang="postcss" scoped>
.text {
  padding: 0 40px;
  font-size: 24px; line-height: 48px;
}
</style>