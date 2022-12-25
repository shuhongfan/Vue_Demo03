<template>
  <div>
    <h1 class="mb-4">App 根组件</h1>
    <button type="button" class="btn btn-primary" @click="comName = 'MyHome'">首页</button>
    <button type="button" class="btn btn-info ml-2" @click="comName = 'MyMovie'">电影</button>
    <hr />

    <!-- 使用组件 -->
    <!-- <my-home></my-home>
    <my-movie></my-movie> -->
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
// 导入组件
import MyHome from './Home.vue'
import MyMovie from './Movie.vue'

export default {
  name: 'MyApp',
  data() {
    return {
      comName: 'MyHome'
    }
  },
  // 注册组件
  components: {
    MyHome,
    MyMovie,
  },
}
</script>

<style lang="less" scoped></style>
