<template>
  <div>
    <h1 ref="myh11">App 根组件</h1>
    <hr />

    <button type="button" class="btn btn-primary" @click="getRefs">获取 $refs 引用</button>

    <my-counter ref="counterRef"></my-counter>
  </div>
</template>

<script>
// 导入组件
import MyCounter from './Counter.vue'

export default {
  name: 'MyApp',
  methods: {
    getRefs() {
      // console.log(this.$refs)
      // this.$refs.myh11.style.color = 'red'

      // console.log(this.$refs.counterRef)
      this.$refs.counterRef.reset()
    },
  },
  // 注册组件
  components: {
    MyCounter,
  },
}
</script>

<style lang="less" scoped></style>
