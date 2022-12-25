<template>
  <div>
    <h3>Level Two 二级组件</h3>

    <hr />

    <level-three></level-three>
  </div>
</template>

<script>
import LevelThree from './LevelThree.vue'

export default {
  name: 'LevelTwo',
  components: {
    LevelThree,
  },
}
</script>

<style lang="less" scoped></style>
