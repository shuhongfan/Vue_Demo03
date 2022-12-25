<template>
  <div>
    <h1>App 根组件 -- {{ count }}</h1>
    <button type="button" class="btn btn-primary" @click="count += 1">+1</button>
    <hr />

    <!-- 3. 以标签形式使用子组件 -->
    <!-- <my-son :num="count" @numchange="getNum"></my-son> -->
    <my-son v-model:num="count"></my-son>
  </div>
</template>

<script>
// 1. 导入子组件
import MySon from './Son.vue'

export default {
  name: 'MyApp',
  data() {
    return {
      count: 0,
    }
  },
  // methods: {
  //   getNum(num) {
  //     this.count = num
  //   }
  // },
  // 2. 注册子组件
  components: {
    MySon,
  },
}
</script>

<style lang="less" scoped></style>
