<template>
  <div>
    <h3>数据接收方 --- num 的值为：{{ num }}</h3>
  </div>
</template>

<script>
import bus from './eventBus.js'

export default {
  name: 'MyRight',
  data() {
    return {
      num: 0,
    }
  },
  created() {
    bus.on('countChange', count => {
      this.num = count
    })
  },
}
</script>

<style lang="less" scoped></style>
