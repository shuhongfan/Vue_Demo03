<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <!-- 3. 使用对应的组件 -->
    <div class="box">
      <get-info></get-info>
      <post-info></post-info>
    </div>
  </div>
</template>

<script>
// 1. 导入需要的组件
import GetInfo from './GetInfo.vue'
import PostInfo from './PostInfo.vue'

export default {
  name: 'MyApp',
  // 2. 注册组件
  components: {
    GetInfo,
    PostInfo,
  },
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  > div {
    flex: 1;
    border: 1px solid #eee;
    margin: 15px;
    padding: 15px;
    border-radius: 3px;
    box-shadow: 0px 1px 4px #ccc;
    min-height: 200px;
  }
}
</style>
