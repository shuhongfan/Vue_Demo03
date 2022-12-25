<template>
  <div>
    <h1>App 根组件</h1>

    <router-link to="/home">首页</router-link>
    <router-link to="/main" class="ml-2">后台主页</router-link>
    <hr />
    
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyApp',
}
</script>

<style lang="less" scoped></style>
