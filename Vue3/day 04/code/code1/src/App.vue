<template>
  <h1>这是 <i>App.vue</i> 根组件</h1>
  <hr />
  <!-- <h3>abc --- {{ username }}</h3>
  <hr />
  <p>count值是：{{ count }}</p>
  <button @click="addCount">+1</button> -->

  <my-swiper></my-swiper>
  <MyTest></MyTest>
  <my-test></my-test>
  <hr />
  <my-search></my-search>
</template>

<script>
import Search from './components/02.privateReg/Search.vue'

export default {
  // 组件的名称
  name: 'MyApp',
  data() {
    return {
      username: 'zs',
      count: 0,
    }
  },
  methods: {
    addCount() {
      this.count++
    },
  },
  components: {
    'my-search': Search,
  },
}
</script>

<style lang="less">
h1 {
  color: red;
  i {
    color: blue;
  }
}
</style>
