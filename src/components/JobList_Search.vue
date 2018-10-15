<template>
  <div class="search-wrapper">
    <!--<div class="search-title">搜索选项</div>-->
    <!--<div class="divider"></div>-->
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
      <el-row :gutter="20">
        <!--作业名-->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="search-item">
          <el-form-item label="作业名">
            <el-input v-model="form.jobName" placeholder="请输入作业名"></el-input>
          </el-form-item>
        </el-col>
        <!--业务线-->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="search-item">
          <el-form-item label="业务线">
            <el-select v-model="form.busConfigId" placeholder="请选择业务线" class="single-selector">
              <el-option label="测试数据1" value="test1"></el-option>
              <el-option label="测试数据2" value="test2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!--集群-->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="search-item">
          <el-form-item label="集群">
            <el-select v-model="form.cluster" placeholder="请选择集群" class="single-selector">
              <el-option label="测试数据1" value="test1"></el-option>
              <el-option label="测试数据2" value="test2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!--队列-->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="search-item">
          <el-form-item label="队列">
            <el-select v-model="form.queue" placeholder="请选择队列" class="single-selector">
              <el-option label="测试数据1" value="test1"></el-option>
              <el-option label="测试数据2" value="test2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!--创建者-->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="search-item">
          <el-form-item label="创建者">
            <el-input v-model="form.creater" placeholder="请输入创建者"></el-input>
          </el-form-item>
        </el-col>
        <!--优先级-->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="search-item">
          <el-form-item label="优先级">
            <el-select v-model="form.queue" placeholder="请选择优先级" class="single-selector">
              <el-option label="VERY_HIGH" value="test1"></el-option>
              <el-option label="HIGH" value="test2"></el-option>
              <el-option label="NORMAL" value="test3"></el-option>
              <el-option label="LOW" value="test4"></el-option>
              <el-option label="VERY_LOW" value="test5"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!--状态-->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="search-item">
          <el-form-item label="状态">
            <el-select v-model="form.queue" placeholder="请选择状态" class="single-selector">
              <el-option label="正常" value="test1"></el-option>
              <el-option label="待审核" value="test2"></el-option>
              <el-option label="待签到" value="test3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!--按钮-->
        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" class="search-item">
          <el-row type="flex" justify="center" class="search-buttons">
            <el-button type="primary">搜索</el-button>
            <el-button type="primary">重置</el-button>
            <el-button type="primary">创建</el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        form: {
          jobName: '',
          busConfigId: '',
          cluster: '',
          queue: '',
          creater: '',
          priority: '',
          jobStatus: ''
        }
      }
    }
  }
</script>

<style>
  .search-wrapper{
    width: 100%;
    padding: 10px 20px;
    text-align:center;
    background-color: #f2f2f2;
  }
  .search-title{
    font-size:24px;
    font-weight:700;
  }
  .el-select .el-input {
    width: 100%;
  }
  .single-selector{
    width: 100%;
  }
  .single-selector .el-input{
    width: 100%;
  }
  .time-selector .el-input{
    width: 100%!important;
  }
  .el-range-editor{
    width: 100%!important;
  }
  .el-input-group .el-input-group__prepend {
    color: #000;
  }
</style>
