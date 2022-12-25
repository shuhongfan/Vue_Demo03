<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <input type="text" class="form-control" v-if="inputVisible" ref="ipt" />
    <button type="button" class="btn btn-primary" v-else @click="showInput">展示 input 输入框</button>
  </div>
</template>

<script>
export default {
  name: 'MyApp',
  data() {
    return {
      inputVisible: false,
    }
  },
  methods: {
    showInput() {
      // 要展示文本框
      this.inputVisible = true
      this.$nextTick(() => {
        console.log(this.$refs.ipt)
        // 获取到文本框的引用对象，然后调用 focus() 方法
        this.$refs.ipt.focus()
      })
    },
  },
}
</script>

<style lang="less" scoped>
input.form-control {
  width: 280px;
  display: inline;
  vertical-align: bottom;
}
</style>
