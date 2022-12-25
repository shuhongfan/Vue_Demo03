import { createApp } from 'vue'
// import App from './components/01.easy-router/App.vue'

/* import App from './components/02.start/App.vue'
import router from './components/02.start/router' */

/* import App from './components/03.plus/App.vue'
import router from './components/03.plus/router' */

/* import App from './components/04.params/App.vue'
import router from './components/04.params/router' */

/* import App from './components/05.named/App.vue'
import router from './components/05.named/router' */

/* import App from './components/06.guards/App.vue'
import router from './components/06.guards/router' */

import App from './components/07.next/App.vue'
import router from './components/07.next/router'

import './assets/css/bootstrap.css'
import './index.css'

const app = createApp(App)

// 挂载路由模块
app.use(router)

app.mount('#app')
