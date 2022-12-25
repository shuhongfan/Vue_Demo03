<template>
  <div>
    <h1>vue-router 的基本使用</h1>
    <!-- 声明路由链接 -->
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/movie/1">电影1</router-link>&nbsp;
    <router-link to="/movie/2">电影2</router-link>&nbsp;
    <router-link to="/movie/3">电影3</router-link>&nbsp;
    <router-link to="/about">关于</router-link>
    <hr />

    <!-- 路由的占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyApp',
}
</script>

<style lang="less" scoped>
hr + div {
  background-color: #efefef;
  padding: 15px;
  min-height: 300px;
}
</style>
