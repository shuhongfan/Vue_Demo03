<template>
  <div>
    <h1>App 根组件</h1>

    <hr />

    <!-- 使用组件 -->
    <my-home></my-home>
  </div>
</template>

<script>
// 导入组件
import MyHome from './Home.vue'

export default {
  name: 'MyApp',
  // 注册组件
  components: {
    MyHome,
  },
}
</script>

<style lang="less" scoped></style>
