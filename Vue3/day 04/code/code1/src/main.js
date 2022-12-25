// 1. 按需导入 createApp 函数
import { createApp } from 'vue'
// 2. 导入待渲染的 App.vue 组件
// import App from './App.vue'
// import App from './components/03.style/App.vue'
// import App from './components/04.props/App.vue'
// import App from './components/05.class&style/App.vue'
import App from './components/App.vue'

// 1. 导入需要被全局注册的组件
import Swiper from './components/01.globalReg/Swiper.vue'
import Test from './components/01.globalReg/Test.vue'

// 3. 调用 createApp 函数，创建 SPA 应用的实例
const app = createApp(App)

// 2. 调用 app.component() 方法全局注册组件
app.component(Swiper.name, Swiper)
app.component(Test.name, Test)

// 4. 调用 mount() 把 App 组件的模板结构，渲染到指定的 el 区域中
app.mount('#app')
