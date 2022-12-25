<template>
  <div>
    <h3>MyMovie 组件 --- {{ $route.params.mid }} --- {{ mid }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MyMovie',
  props: ['mid'],
}
</script>

<style lang="less" scoped></style>
