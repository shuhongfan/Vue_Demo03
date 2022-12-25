import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './Home.vue'
import Main from './Main.vue'
import Login from './Login.vue'

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/main', component: Main },
    { path: '/login', component: Login },
  ],
})

// 全局路由导航守卫
router.beforeEach((to, from, next) => {
const tokenStr = localStorage.getItem('token')

  if (to.path === '/main' && !tokenStr) {
    // 证明用户要访问后台主页
    next('/login')
  } else {
    // 访问的不是后台主页
    next()
  }
})

export default router
