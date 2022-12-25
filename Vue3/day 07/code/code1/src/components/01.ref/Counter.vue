<template>
  <div class="counter-container">
    <h3>Counter 组件 --- {{ count }}</h3>
    <hr />
    <button type="button" class="btn btn-info" @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    reset() {
      this.count = 0
    },
  },
}
</script>

<style lang="less" scoped>
.counter-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #efefef;
  border-radius: 4px;
  box-shadow: 0px 1px 10px #efefef;
}
</style>
