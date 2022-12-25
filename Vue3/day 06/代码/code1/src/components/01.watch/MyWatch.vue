<template>
  <div>
    <h3>watch 侦听器的用法</h3>
    <input type="text" class="form-control" v-model.trim="info.username" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyWatch',
  data() {
    return {
      username: 'admin',
      info: {
        username: 'zs',
        age: 20,
      },
    }
  },
  watch: {
    // async username(newVal, oldVal) {
    //   console.log(newVal, oldVal)
    //   const {data: res} = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
    //   console.log(res)
    // },
    // username: {
    //   async handler(newVal, oldVal) {
    //     const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
    //     console.log(res)
    //   },
    //   // 立即触发 watch 侦听器
    //   immediate: true,
    // },
    // info: {
    //   async handler(newVal) {
    //     const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal.username)
    //     console.log(res)
    //   },
    //   deep: true,
    // },
    'info.username': {
      async handler(newVal) {
        const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
        console.log(res)
      },
    },
  },
}
</script>

<style lang="less" scoped></style>
