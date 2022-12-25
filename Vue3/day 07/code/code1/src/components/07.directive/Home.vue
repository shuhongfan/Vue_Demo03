<template>
  <div class="home-container">
    <h3 v-color="'red'">MyHome 组件 --- {{ count }}</h3>
    <hr />

    <input type="text" class="form-control" v-focus v-color="'cyan'" />
    <button type="button" class="btn btn-primary" @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  data() {
    return {
      count: 0,
    }
  },
  directives: {
    // focus: {
    //   mounted(el) {
    //     el.focus()
    //   },
    // },
  },
}
</script>

<style lang="less" scoped>
.home-container {
  border: 1px solid #efefef;
  box-shadow: 0px 1px 10px #efefef;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
}

input.form-control {
  width: 280px;
}
</style>
