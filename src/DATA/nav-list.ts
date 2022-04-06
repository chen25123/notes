interface Nav {
  name: string;
  routeName: string;
  key: string;
  children?: Nav[];
}

interface NavList {
  navList: Nav[];
}

const data: NavList = {
  navList: [
    {
      name: 'vite+vue3.0+ts', routeName: '', key: '1',children: [
        { name: '框架', routeName: 'frameworkPage', key: '1.1', children: [
          { name: '路由配置', routeName: 'vueRouterPage', key: '1.1.1' },
          { name: 'md2html', routeName: 'markdownPage', key: '1.1.2' }
        ]},
        { name: 'typescript', routeName: '', key: '1.2', children: [
          { name: '配置', routeName: 'tsConfigPage', key: '1.2.1', },
          { name: '接口', routeName: 'tsTypesPage', key: '1.2.2' }
        ]},
      ]
    },
    {
      name: 'cssDemo', routeName: 'cssHtmlPage', key: '2'
    },
    {
      name: 'jsDemo', routeName: 'jsHtmlPage', key: '3'
    },
    {
      name: 'toolsDemo', routeName: '', key: '4', children: [
        { name: 'eruda', routeName: 'erudaPage', key: '4.1', },
      ]
    },
    {
      name: 'uni-app', routeName: 'uaHomePage', key: '5', children: [
        { name: 'v-model', routeName: 'uaVmodelPage', key: '5.1', },
      ]
    },
    
  ]
}

export default data;