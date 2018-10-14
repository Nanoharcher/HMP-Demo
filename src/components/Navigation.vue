<template>
  <div class="navigation-wrapper">
    <el-menu class="navigation-content" mode="horizontal"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
      <el-menu-item index="1">资源统计</el-menu-item>
      <el-menu-item index="2">作业统计</el-menu-item>
      <el-menu-item index="3">Hadoop</el-menu-item>
      <el-menu-item index="4">LS平台</el-menu-item>
      <el-menu-item index="5">HMPClient</el-menu-item>
      <el-menu-item index="6">帮助</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    methods: {}
  }
</script>

<style scoped>
  .navigation-wrapper {
    background-color: rgb(84, 92, 100);
    width: 100%;
  }
  .navigation-content{
    border: none!important;
  }

  .el-menu {
    margin: 0 auto;
    z-index: 99;
    width: 100%;
    padding: 0 10%;

  }
  .el-menu-item, .el-submenu {
    flex: 1 !important;
  }

  .navigation-title {
    font-size: 16px;
  }
  .el-menu.el-menu--horizontal{

  }
  @media screen and (max-width: 1440px) {
    .el-menu {
      padding: 0 60px;
    }
  }

  @media screen and (max-width: 1024px) {
    .el-menu {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
    }
  }
</style>
