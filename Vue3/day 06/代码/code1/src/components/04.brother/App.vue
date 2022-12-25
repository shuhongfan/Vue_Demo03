<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <div class="brother-box">
      <!-- 3. 使用组件 -->
      <my-left></my-left>
      <my-right></my-right>
    </div>
  </div>
</template>

<script>
// 1. 导入需要的组件
import MyLeft from './Left.vue'
import MyRight from './Right.vue'

export default {
  name: 'MyApp',
  // 2. 注册组件
  components: {
    MyLeft,
    MyRight,
  },
}
</script>

<style lang="less" scoped>
.brother-box {
  display: flex;
  > div {
    border: 1px solid #ccc;
    flex: 1;
    margin: 10px;
    padding: 10px;
    height: 300px;
  }
}
</style>
