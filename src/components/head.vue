<template>
  <div id="headBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "headBox"
}
</script>

<style scoped>
  #headBox{
    height: 60px;
    background-color: #EFF2F7;
    align-items: center;
    display: flex;
  }
  .el-breadcrumb {
    font-size: 13px;
    line-height: 1;
    padding-left: 25px;
  }
</style>
