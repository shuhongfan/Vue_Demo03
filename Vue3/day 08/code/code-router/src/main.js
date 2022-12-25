import { createApp } from 'vue'
import App from './App.vue'
// 导入 bootstrap 样式表
import './assets/css/bootstrap.css'
// 导入全局自定义样式表
import './index.css'

import router from './router'

// 创建 app 实例
const app = createApp(App)

app.use(router)

// 挂载 app 实例
app.mount('#app')
