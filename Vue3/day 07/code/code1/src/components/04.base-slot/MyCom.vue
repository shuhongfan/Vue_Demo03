<template>
  <div class="com-container">
    <h3>MyCom 组件 --- 插槽的基础用法</h3>
    <hr />

    <p>这是第一个 p 标签</p>
    <slot>这是后备内容</slot>
    <p>这是最后一个 p 标签</p>
  </div>
</template>

<script>
export default {
  name: 'MyCom',
}
</script>

<style lang="less" scoped>
.com-container {
  border: 1px solid #efefef;
  box-shadow: 0px 1px 10px #efefef;
  margin: 20px;
  padding: 20px;
}
</style>
