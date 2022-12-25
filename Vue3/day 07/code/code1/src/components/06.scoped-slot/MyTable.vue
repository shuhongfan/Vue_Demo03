<template>
  <table class="table table-bordered table-striped table-dark table-hover">
    <!-- 表头区域 -->
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>State</th>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <!-- 循环渲染表格数据 -->
      <tr v-for="item in list" :key="item.id">
        <slot :user="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MyTable',
  data() {
    return {
      // 列表的数据
      list: [
        { id: 1, name: '张三', state: true },
        { id: 2, name: '李四', state: false },
        { id: 3, name: '赵六', state: false },
      ],
    }
  },
}
</script>

<style lang="less" scoped></style>
