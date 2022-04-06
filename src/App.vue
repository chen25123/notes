<template>
  <div class="notes-warpper">
    <section class="header display-flex">
      <div class="title">
        <div class="title-text"><a href="http://git.gdzhzdxf.cn:22255/chen25123/notes">git传送门</a></div>
        <div class="desc-text">PS：本项目作为一个学习vite和vue3.0的项目而搭建，主要用来写笔记。</div>
      </div>
    </section>
    <section class="main-body display-flex flex1">
      <div class="nav-box" style="font-size: 20px;">
        <NavItem :nav="navList"></NavItem>
      </div>
      <div class="main-right flex1">
        <section class="nav-map">
          <span v-for="(item, index) in layerTree" :key="index">{{ item.name }}</span>
        </section>
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">

import NavItem from './components/nav/nav-item.vue'

import { defineComponent } from 'vue'
import navHook from './components/nav/nav-hook'

export default defineComponent({
  name: 'app',
  components: {
    NavItem
  },
  setup() {
    const { state, navList, layerTree } = navHook();

    return {
      state,
      navList,
      layerTree
    }
  },
  methods: {
    mapClick() {
    },
  }
})

</script>

<style lang="postcss">
.notes-warpper {
  height: 100vh;
  /* display: flex; flex-direction: column; */
  overflow: hidden;
}
.header {
  position: fixed; left: 0; top: 0; right: 0;
  padding: 0 20px;
  width: 100%; height: 80px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  .title {
    height: 80px;
    .title-text {
      font-size: 24px; font-weight: 500; line-height: 50px;
      a{
        color: #333;
        text-decoration: none;
        &:hover {
          color: #333;
        }
      }
    }
    .desc-text {}
  }
  .desc-text {}
}
.main-body {
  padding-top: 81px;
   align-items: flex-start;
   height: 100vh;
   /* height: min(100vh,100vh - 80px); */
  .nav-box {
    padding: 20px;
    width: max(200px, min(300px, 100vw - 600px));
    height: 100%;
    border-right: 1px solid #ccc;
    &>.tree>.item>.title-box .text { font-weight: 600;}
  }
  .main-right {
    box-sizing: border-box;
    padding: 0 20px 40px;
    height: 100%;
    overflow-y: auto;
    .empty-bottom {
      height: 40px;
    }
  }
  .nav-map {
    padding-top: 20px;
    span {
      font-size: 14px; color: #333;
      &:last-child {
        color: #808080;
      }
    }
    span:not(:last-child){
      cursor: pointer;
      &:after {
        padding: 0 6px;
        content: '>';
      }
    }
  }
}
</style>
