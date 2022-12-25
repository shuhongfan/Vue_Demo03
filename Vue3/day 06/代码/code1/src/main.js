import { createApp } from 'vue'
//#region 导入 App 根组件
// import App from './components/01.watch/App.vue'
// import App from './components/02.life-cycle/App.vue'
// import App from './components/03.father-son/App.vue'
// import App from './components/04.brother/App.vue'
// import App from './components/05.provide&inject/App.vue'
//#endregion
import App from './components/06.network/App.vue'

import './assets/css/bootstrap.css'
import './index.css'

import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.mount('#app')
