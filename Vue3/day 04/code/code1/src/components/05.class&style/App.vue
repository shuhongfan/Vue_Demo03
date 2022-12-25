<template>
  <div>
    <h1>这是 App.vue 组件</h1>
    <hr />

    <my-style></my-style>
  </div>
</template>

<script>
import MyStyle from './Style.vue'

export default {
  name: 'MyApp',
  components: {
    MyStyle
  }
}
</script>
