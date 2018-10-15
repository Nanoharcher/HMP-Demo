<template>
  <div>
    <el-carousel height="40px" arrow="never" :interval="5000" indicator-position="none">
      <el-carousel-item>
        <div class="rotate-banner">
          <a class="xp-follow-account" href="javascript:void(0)" @click="doFollowHiPu('_Qk0wO5b2e0--t9RqDUBHA')"><img
            src="https://st0.im.baidu.com/xp/images/followBtn.jpg"></a>
          <span style="color: blue;">HMP平台问题，请优先咨询 </span>
          <span style="color: red;">"HMP服务号"</span>
          <span style="color: blue;">或</span>
          <span style="color: red;">1588517</span>
          <span style="color: blue;">专项支持群</span>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="rotate-banner">
          <span style="color: red;">【公告】</span>
          <span style="color: blue;" id="note">好消息！跨队列调度功能已上线，请大家多了解和使用，以减少作业积压！<a
            href="http://wiki.baidu.com/pages/viewpage.action?pageId=467671033" target="_blank">HMPClient</a></span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'RotatingBanner'
  }
</script>

<style scoped>
  .rotate-banner {
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: #f5ffbc;
    height: 100%;
    opacity: 0.6;
  }
</style>
