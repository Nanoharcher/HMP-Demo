<template>
    <div>
      <rotating-banner></rotating-banner>
      <div class="divider"></div>
      <el-container>
        <search></search>
      </el-container>
      <el-container>
        <table-content></table-content>
      </el-container>
    </div>
</template>

<script>
  import Search from '@/components/JobList_Search'
  import TableContent from '@/components/JobList_TableContent'
  import RotatingBanner from '@/components/RotatingBanner'

  export default {
    name: 'HomePage',
    components: {
      Search,
      TableContent,
      RotatingBanner
    }
  }
</script>

<style scoped>
  .divider {
    border-bottom: 1px solid rgba(7, 17, 27, 0.2);
  }
</style>
