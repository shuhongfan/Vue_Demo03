<template>
  <div>
    <h5>Level Three 三级组件 --- {{ color.value }} --- {{ count }}</h5>
  </div>
</template>

<script>
export default {
  name: 'LevelThree',
  inject: ['color', 'count'],
}
</script>

<style lang="less" scoped></style>
