<template>
  <div>
    <el-menu
      default-active="1-1"
      class="sidebar-content"
      @open="handleOpen"
      @close="handleClose"
      background-color="#853998"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>Job管理</span>
        </template>
        <el-menu-item index="1-1">Job注册列表</el-menu-item>
        <el-menu-item index="1-2">Job注册</el-menu-item>
        <el-menu-item index="1-3">Job上线</el-menu-item>
        <el-menu-item index="1-4">Job管控记录</el-menu-item>
        <el-menu-item index="1-5">运行中任务管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>mpi管理</span>
        </template>
        <el-menu-item index="2-1">mpi任务kill列表</el-menu-item>
        <el-menu-item index="2-2">mpi注册列表</el-menu-item>
        <el-menu-item index="2-3">mpiJob注册</el-menu-item>
        <el-menu-item index="2-4">mpi高级管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span>存储管理</span>
        </template>
        <el-menu-item index="2-1">目录自动清理</el-menu-item>
        <el-menu-item index="2-2">业务存储分配</el-menu-item>
        <el-menu-item index="2-3">存储分配列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'SideMenu',
    data () {
      return {
        screenWidth: document.body.clientWidth,
        isCollapse: false
      }
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    watch: {
      screenWidth (val) {
        this.screenWidth = val
        if (this.screenWidth <= 1024) {
          this.isCollapse = true
        } else {
          this.isCollapse = false
        }
      }
    }
  }
</script>

<style scoped>
  .sidebar-content{
    background-color: #853998
  }
  .sidebar-content:not(.el-menu--collapse){
    width: 200px;
    box-sizing: border-box;
  }

  .sidebar-content i {
    color: #fff
  }
  .el-menu{
    border: none!important
  }
</style>
