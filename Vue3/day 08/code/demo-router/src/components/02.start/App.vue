<template>
  <div>
    <h1>vue-router 的基本使用</h1>
    <!-- 声明路由链接 -->
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/movie">电影</router-link>&nbsp;
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

<style></style>
