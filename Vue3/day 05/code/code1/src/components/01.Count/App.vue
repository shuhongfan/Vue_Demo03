<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <!-- <my-count count="abc" :state="3"></my-count> -->
    <my-count :count="99" :state="true" info="abc" type="success"></my-count>

  </div>
</template>

<script>
import MyCount from './Count.vue'

export default {
  name: 'MyApp',
  components: {
    MyCount,
  },
}
</script>
