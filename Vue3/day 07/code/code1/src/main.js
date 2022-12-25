import { createApp } from 'vue'
//#region import App
// import App from './components/01.ref/App.vue'
// import App from './components/02.$nextTick/App.vue'
// import App from './components/03.dynamic/App.vue'
// import App from './components/04.base-slot/App.vue'
// import App from './components/05.named-slot/App.vue'
// import App from './components/06.scoped-slot/App.vue'
//#endregion
import App from './components/07.directive/App.vue'

import './assets/css/bootstrap.css'
import './index.css'

const app = createApp(App)

// 声明全局自定义指令
/* app.directive('focus', {
  mounted(el) {
    console.log('mounted')
    el.focus()
  },
  updated(el) {
    console.log('updated')
    el.focus()
  },
}) */

app.directive('focus', (el) => {
  el.focus()
})

app.directive('color', (el, binding) => {
  el.style.color = binding.value
})

app.mount('#app')
