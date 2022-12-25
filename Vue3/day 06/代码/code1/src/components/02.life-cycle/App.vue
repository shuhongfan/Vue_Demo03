<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <button class="btn btn-secondary" @click="flag = !flag">Toggle</button>

    <!-- 3. 以标签形式使用组件 -->
    <life-cycle v-if="flag"></life-cycle>
  </div>
</template>

<script>
// 1. import 导入组件
import LifeCycle from './LifeCycle.vue'

export default {
  name: 'MyApp',
  data() {
    return {
      flag: true,
    }
  },
  // 2. components 注册组件
  components: {
    LifeCycle,
  },
}
</script>

<style lang="less" scoped></style>
