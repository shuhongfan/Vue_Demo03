<template>
  <div class="app-container">
    <my-header title="水果列表" color="white" bgcolor="#0078D7"></my-header>

    <fruit-list></fruit-list>
  </div>
</template>

<script>
import MyHeader from './components/my-header/MyHeader.vue'
import FruitList from './components/fruit-list/FruitList.vue'

export default {
  name: 'MyApp',
  components: {
    MyHeader,
    FruitList,
  },
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
}
</style>
