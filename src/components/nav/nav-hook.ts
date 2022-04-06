import { ref, reactive, computed  } from 'vue'

import navData from '../../DATA/nav-list'


interface Nav {
  name: string;
  routeName: string;
  key: string;
  children?: Nav[];
}

type navState = {
  nowNavLayer: Nav
}

let navStateObj: navState = {
  nowNavLayer: {
    name: '框架', routeName: 'frameworkPage', key: '1.1'
  }
}

export default function navStateManage() {
  const state = reactive<navState>(navStateObj)

  const navList = ref<Nav[]>([]);
  navList.value = navData.navList;

  const layerTree = computed(() => {
    // 返回导航层级树，把嵌套树 铺平成数组返回
    let res = [];
    const checkNavKey = state.nowNavLayer.key;
    const keyArray = checkNavKey.split('.');
    let keyStr = '';
    let navLayer = navList.value;
    for (let i = 0; i < keyArray.length; i++) {
      keyStr += keyArray[i];
      let navLayerIndex = 0;
      for (let j = 0; j < navLayer.length; j++) {
        if (navLayer[j].key === keyStr) {
          navLayerIndex = j;
          break;
        }
      }
      res.push({
        name: navLayer[navLayerIndex].name,
        routeName: navLayer[navLayerIndex].routeName,
        key: navLayer[navLayerIndex].key
      })
      navLayer = navLayer[navLayerIndex].children as Nav[];
      keyStr += '.';
    }

    return res;
  })

  const updateNavLayer = (nav:Nav): void => {
    state.nowNavLayer.name = nav.name;
    state.nowNavLayer.routeName = nav.routeName;
    state.nowNavLayer.key = nav.key;
  }


  return {
    state,
    navList,
    layerTree,
    updateNavLayer
  }

}
