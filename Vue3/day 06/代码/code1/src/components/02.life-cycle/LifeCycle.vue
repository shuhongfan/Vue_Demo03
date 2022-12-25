<template>
  <div>
    <h3>LifeCycle 组件 --- {{ count }}</h3>

    <button type="button" class="btn btn-primary" @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      count: 0,
    }
  },
  beforeCreate() {
    // console.log(this.count)
  },
  // 组件在内存中被创建完毕了
  created() {
    console.log('created: 组件在内存中被创建完毕了')
    console.log(this.count)
  },
  // 组件第一次被渲染到了页面上
  mounted() {
    console.log('mounted: 组件第一次被渲染到了页面上')
  },
  // 组件被重新渲染完毕了
  updated() {
    console.log('updated: 组件被重新渲染完毕了')
  },
  // 组件被销毁完毕了
  unmounted() {
    console.log('unmounted: 组件被销毁完毕了')
  },
}
</script>

<style lang="less" scoped></style>
