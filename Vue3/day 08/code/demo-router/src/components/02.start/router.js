import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './MyHome.vue'
import Movie from './MyMovie.vue'
import About from './MyAbout.vue'

// 创建路由对象
const router = createRouter({
  // 指定路由的工作模式
  history: createWebHashHistory(),
  // 自定义路由高亮的 class 类
  linkActiveClass: 'active-router',
  // 声明路由的匹配规则
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
    { path: '/about', component: About },
  ],
})

// 导出路由对象
export default router
