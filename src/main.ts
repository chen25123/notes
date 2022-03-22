import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import './style/css.css';
import './style/md.css';
import 'highlight.js/styles/googlecode.css'

const app = createApp(App);
app.use(router);

app.mount('#app');

// createApp(App).mount('#app')
