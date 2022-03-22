<template>
  <div class="tree" :style="fontSize">
    <div class="item" v-for="(item) in nav" :key="item.name">
      <div class="title-box" @click.stop="navClick(item)">
        <div class="icon" v-if="item.icon"></div>
        <div class="text">{{ item.name }}</div>
        <div class="arrow"></div>
      </div>
      <div class="child-box" v-if="item.children && item.children.length > 0">
        <NavItem :nav="item.children" :tierCount="tierCount * 0.9"></NavItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavItem',
  props: {
    nav: {
      type: Array
    },
    tierCount: {
      type: Number,
      default: 1
    }
  },
  computed: {
    navList(): object[] {
      return this.nav as object[];
    },
    fontSize(): object {
      return {
        "font-size": this.tierCount + 'em',
      }
    },
  },
  methods: {
    navClick(item: any): void {
      if (!!item.routeName) {
        this.$router.push( {name: item.routeName} );
      }
    },
  },
  // setup(props) {
  //   // console.log(props.nav);
  //   let navList = props.nav;
  //   let fontSize = props.tierCount * 0.8;

  //   return {
  //     navList,
  //     fontSize: {
  //      fontSize: this.tierCount + 'rm',
  //     }
  //   }
  // },
})

</script>

<style lang="postcss">
.tree {
  width: 100%;
  .item {
    .title-box {
      height: 40px;
      line-height: 40px;
    }
    .child-box {
      padding-left: 20px;
    }
    &.cur {

    }
  }
}
</style>