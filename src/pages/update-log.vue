<template>
  <div class="log-wrapper">
    <div class="item" v-for="(item, index) in logList" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="content-box">
        <div v-for="(text, ikey) in item.list" :key="ikey">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface listType {
  title: string,
  list?: Array<string>
}

type dataType = {
  logList: listType[]
}

export default defineComponent({
  data(): dataType {
    return {
      logList: [
        {
          title: '待办：左侧导航折叠及样式。',
          list: [],
        },
        {
          title: '2022-04-06： 更新记录',
          list: [
            '1. 使用composition api实现全局面包屑;',
            '2. js空闲时间回调函数requestIdleCallback的demo。'
          ]
        },
        {
          title: '2022-03-03： 右侧内容区域独立滚动，页面头部和左侧保持位置不变',
        },
        {
          title: '2022-03-02： uni-app中使用v-model踩坑记录',
          list: [
            '1. uni-app中使用v-model踩坑记录',
            '2. vue2.0和vue3.0使用v-model的区别',
            '3. vue2.0使用.sync'
          ]
        },
        {
          title: '2022-03-01： 添加日志',
          list: [
            '1. 添加日志'
          ]
        }
      ]
    }
  },
})
</script>

<style lang="postcss" scoped>
.log-wrapper {
  .title {
    padding-top: 20px;
    font-size: 16px; color: #333; font-weight: 600;
  }
  .content-box {
    margin-top: 8px;
    line-height: 24px;
  }
}
</style>