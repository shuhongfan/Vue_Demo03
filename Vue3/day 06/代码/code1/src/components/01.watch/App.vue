<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <my-watch></my-watch>
  </div>
</template>

<script>
import MyWatch from './MyWatch.vue'

export default {
  name: 'MyApp',
  components: {
    MyWatch,
  },
}
</script>

<style lang="less" scoped></style>
