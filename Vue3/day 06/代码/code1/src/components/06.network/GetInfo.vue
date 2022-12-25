<template>
  <div>
    <h3>Get Info 组件</h3>
    <hr />

    <button type="button" class="btn btn-primary" @click="getInfo">发起 GET 请求</button>
  </div>
</template>

<script>
export default {
  name: 'GetInfo',
  methods: {
    async getInfo() {
      const { data: res } = await this.$http.get('/api/get', {
        params: {
          name: 'ls',
          age: 33,
        },
      })

      console.log(res)
    },
  },
}
</script>

<style lang="less" scoped></style>
