<template>
  <div id="app">
    <el-container class="content-wrapper">
      <el-header class="header-wrapper">
        <div class="logo-wrapper" onclick="document.location.href='/'">
          <!--<i class="glyphicon glyphicon-inbox"></i>-->
          <span class="logo-title">FEED-HMP平台</span>
        </div>
        <div class="navigation-wrapper">
          <Navigation></Navigation>
        </div>
        <div class="login-wrapper">
          <div class="login-button-wrapper">
            <el-dropdown class="login-dropdown" trigger="click" size="mini" split-button type="success">
              <!--<i class="glyphicon glyphicon-user"></i>-->
              <span class="login-username">{{this.user}}</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮助文档</el-dropdown-item>
                <el-dropdown-item>帮助文档</el-dropdown-item>
                <el-dropdown-item>帮助文档</el-dropdown-item>
                <el-dropdown-item>帮助文档</el-dropdown-item>
                <el-dropdown-item>帮助文档</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container class="body-wrapper">
        <el-aside class="sidebar-wrapper">
          <SideMenu></SideMenu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import SideMenu from '@/components/SideMenu'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap-table/dist/bootstrap-table.min.css'
  import 'bootstrap/dist/js/bootstrap.min'
  import 'bootstrap-table/dist/bootstrap-table.min'
  import '../static/css/bootstrap-table-fixed-columns.css'
  import '../static/js/bootstrap-table-fixed-columns.js'
  import 'magnific-popup/dist/magnific-popup.css'

  export default {
    name: 'App',
    data () {
      return {
        user: '马旭骁'
      }
    },
    components: {
      Navigation,
      SideMenu
    }
  }
</script>
<style>
  html, body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
  .content-wrapper{
    height: 100%;
  }
  .body-wrapper{
    height: 100%;
  }
  .el-header {
    margin: 0;
    padding: 0!important;
  }
  .el-main{
    padding: 0;
  }
  .header-wrapper{
    display: flex;
    z-index: 999;
    width: 100%;
  }
  .logo-wrapper{
    background-color: rgb(84, 92, 100);
    cursor: pointer;
    padding: 0 10px;
  }
  .logo-wrapper i{
    font-size: 28px;
    line-height: 60px;
    vertical-align: top;
    color: #fff;
  }
  .logo-title{
    font-size: 24px;
    line-height: 60px;
    margin: 0;
    vertical-align: top;
    color: #fff;
    font-weight: 700;
  }
  .login-wrapper{
    background-color: rgb(84, 92, 100);
    cursor: pointer;
    padding: 0 20px 0 20px;
  }
  .login-button-wrapper i{
    vertical-align: top;
    color: #fff;
  }
  .login-button-wrapper .login-username{
    vertical-align: top;
    color: #fff;
  }
  .login-button-wrapper{
    display: inline-block;
    font-size: 14px;
    line-height: 60px;
    vertical-align: top;
  }
  .login-dropdown{
    vertical-align: top;
  }
  .navigation-wrapper{
    flex: 1;
  }
  .sidebar-wrapper{
    box-sizing: border-box;
    width: 200px!important;
    border: none!important;
    background-color: #853998;
  }
  @media screen and (max-width: 1024px) {
    .el-header{
      height: auto!important
    }
    .header-wrapper{
      display: inline-block;
    }
    .logo-wrapper{
      display: inline-block;
      float: left;
    }
    .login-wrapper{
      display: block;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    .sidebar-wrapper{
      width: auto!important;
    }
  }
</style>
