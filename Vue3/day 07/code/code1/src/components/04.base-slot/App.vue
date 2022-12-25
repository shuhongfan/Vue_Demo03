<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <!-- 使用组件 -->
    <my-com>
    </my-com>
  </div>
</template>

<script>
// 导入组件
import MyCom from './MyCom.vue'

export default {
  name: 'MyApp',
  // 注册组件
  components: {
    MyCom,
  },
}
</script>

<style lang="less" scoped></style>
