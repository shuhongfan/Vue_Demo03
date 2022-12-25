<template>
  <div>
    <h3>MyAbout 组件</h3>

    <!-- 声明子路由链接 -->
    <router-link to="/about/tab1">Tab1</router-link>&nbsp;
    <router-link to="/about/tab2">Tab2</router-link>
    <hr>

    <!-- 声明子路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyAbout',
}
</script>

<style lang="less" scoped></style>
