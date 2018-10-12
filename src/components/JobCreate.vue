<template>
  <div class="content-wrapper">
    <el-carousel height="40px" arrow="never" :interval="5000">
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
    <div class="divider"></div>
    <div class="form-wrapper">
      <el-form :model="jobCreateForm" :rules="rules" ref="ruleForm" label-width="125px" class="search-wrapper">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <span class="condition-title">必填数据</span>
            </template>
            <div class="basic-search-wrapper">
              <el-row :gutter="20" class="search-rows">
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-tooltip placement="top">
                    <div slot="content">每个任务一条纪录, <span style="color:red;"><b>请去掉任务名结尾的"_日期"</b></span>, 如任务名:
                      feed_production_[time]_xxx_20171111, 注册名: feed_production_[time]_xxx，time的取值为hour或day或other
                    </div>
                    <el-form-item label="任务名" prop="jobname">
                      <el-input v-model="jobCreateForm.jobname" placeholder="请选择任务名"></el-input>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-tooltip placement="top">
                    <div slot="content">若不存在，请联系管理员</div>
                    <el-form-item label="业务线" prop="busConfigId">
                      <el-select v-model="jobCreateForm.busConfigId" placeholder="请选择业务线">
                        <el-option label="测试数据" value="test1"></el-option>
                        <el-option label="测试数据" value="test2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-tooltip placement="top">
                    <div slot="content">
                      自动选择空闲队列，以减少任务积压。提交任务必须使用
                      <b><a href="http://wiki.baidu.com/pages/viewpage.action?pageId=467671033" target="_blank">HMPClient</a></b>
                      ，小流量阶段适用范围<b><a href="http://wiki.baidu.com/pages/viewpage.action?pageId=490079170"
                                      target="_blank">
                      说明</a></b>
                    </div>
                    <el-form-item label="跨队列调度" prop="dispatch">
                      <el-select v-model="jobCreateForm.dispatch">
                        <el-option label="开启" value="test1"></el-option>
                        <el-option label="关闭" value="test2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-form-item label="集群" prop="cluster">
                    <el-select v-model="jobCreateForm.cluster" placeholder="请选择集群">
                      <el-option label="测试数据" value="test1"></el-option>
                      <el-option label="测试数据" value="test2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-form-item label="队列" prop="queue">
                    <el-select v-model="jobCreateForm.queue" placeholder="请选择队列">
                      <el-option label="测试数据" value="test1"></el-option>
                      <el-option label="测试数据" value="test2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-form-item label="MapCapacity" prop="mapCapacity">
                    <el-input v-model="jobCreateForm.mapCapacity" placeholder="请输入MapCapacity"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-form-item label="ReduceCapacity" prop="reduceCapacity">
                    <el-input v-model="jobCreateForm.reduceCapacity" placeholder="请输入ReduceCapacity"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-form-item label="UGI" prop="ugi">
                    <el-input v-model="jobCreateForm.ugi" placeholder="请输入UGI"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-tooltip placement="top">
                    <div slot="content">
                      真实全路径, 时间部分请替换: yyyyMM, yyyyMMdd, yyyyMMddHH, yyyyMMdd_HH, yyyyMMdd/HH, yyyyMMdd/HHmm<br>
                      输出路径格式: {fs.default.name}/ user/ {UGI中的账号名}/ job_data/ production|development/ {业务线}/ {个人目录}<br>
                      如：afs://tianqi.afs.baidu.com:9902/user/feed_video/job_data/production/haokan/robin/yyyyMMdd
                    </div>
                    <el-form-item label="输出路径" prop="output">
                      <el-input v-model="jobCreateForm.output" placeholder="请输入输出路径"></el-input>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-tooltip placement="top">
                    <div slot="content">输入、输出和功能描述, &lt;100字</div>
                    <el-form-item label="作业描述" prop="jobDesc">
                      <el-input type="textarea" v-model="jobCreateForm.jobDesc"></el-input>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              <span class="condition-title">可选数据</span>
            </template>
            <div class="optional-search-wrapper">
              <el-row :gutter="20" class="search-rows">
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-form-item label="优先级" prop="priority">
                    <el-select v-model="jobCreateForm.priority" placeholder="请选择优先级">
                      <el-option label="VERY_HIGH" value="test1"></el-option>
                      <el-option label="HIGH" value="test2"></el-option>
                      <el-option label="NORMAL" value="test3"></el-option>
                      <el-option label="LOW" value="test4"></el-option>
                      <el-option label="VERY_LOW" value="test5"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-form-item label="有输出路径" prop="hasOutputYes">
                    <el-switch v-model="jobCreateForm.hasOutputYes"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-form-item label="作业组名称" prop="groupName">
                    <el-input v-model="jobCreateForm.groupName" placeholder="请输入作业组名称"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-tooltip placement="top">
                    <div slot="content">可只写前缀, 多个逗号分隔</div>
                    <el-form-item label="告警邮件" prop="mails">
                      <el-input v-model="jobCreateForm.mails" placeholder="请输入告警邮件"></el-input>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="search-item">
                  <el-tooltip placement="top">
                    <div slot="content">0-30天, 0:非临时任务</div>
                    <el-form-item label="临时任务期限" prop="validDay">
                      <el-input v-model="jobCreateForm.validDay" placeholder="请输入天数"
                                :disabled="!jobCreateForm.hasvalidDay">
                        <el-switch v-model="jobCreateForm.hasvalidDay" slot="prepend"></el-switch>
                      </el-input>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
        </el-collapse>
        <p class="warning-message"><b>注意: </b><b style="color:red">请务必保证注册信息的真实性，以免影响任务正常运行。注册后在统一时间点审批，紧急任务可联系平台管理员审批！</b></p>
        <el-row type="flex" justify="center" class="submit-buttons">
          <el-button type="primary" @click="submitForm('ruleForm')">创建</el-button>
          <el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="warning">列表</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JobCreate',
    data () {
      return {
        activeNames: ['1'],
        jobCreateForm: {
          jobname: '',
          busConfigId: '',
          dispatch: 'test1',
          cluster: '',
          queue: '',
          priority: 'test3',
          ugi: '',
          mapCapacity: '',
          reduceCapacity: '',
          hasOutputYes: true,
          groupName: '',
          output: '',
          mails: '',
          validDay: '',
          hasvalidDay: false,
          jobDesc: ''

        },
        rules: {
          jobname: [
            {required: true, message: '请输入任务名', trigger: 'blur'}
            // {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          busConfigId: [
            {required: true, message: '请输入业务线', trigger: 'blur'}
          ],
          dispatch: [
            {required: true, message: '请选择跨队列调度', trigger: 'blur'}
          ],
          cluster: [
            {required: true, message: '请选择集群', trigger: 'blur'}
          ],
          queue: [
            {required: true, message: '请选择队列', trigger: 'blur'}
          ],
          priority: [
            {required: false, message: '请选择优先级', trigger: 'blur'}
          ],
          ugi: [
            {required: true, message: '请输入UGI', trigger: 'blur'}
          ],
          mapCapacity: [
            {required: true, message: '请输入MapCapacity', trigger: 'blur'}
          ],
          reduceCapacity: [
            {required: true, message: '请输入ReduceCapacity', trigger: 'blur'}
          ],
          hasOutputYes: [
            {required: false, message: '请选择是否有输出路径', trigger: 'blur'}
          ],
          groupName: [
            {required: false, message: '请输入作业组名称', trigger: 'blur'}
          ],
          output: [
            {required: true, message: '请输入输出路径', trigger: 'blur'}
          ],
          mails: [
            {required: false, message: '请输入告警邮件', trigger: 'blur'}
          ],
          validDay: [
            {required: false, message: '请输入天数', trigger: 'blur'}
          ],
          jobDesc: [
            {required: true, message: '请输入作业描述', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      doFollowHiPu (appid) {
        var f = document.createElement('form')
        document.body.appendChild(f)
        f.setAttribute('action', 'baidu://message')
        var input = document.createElement('input')
        input.setAttribute('name', 'appid')
        input.setAttribute('value', appid)
        input.setAttribute('type', 'hidden')
        f.appendChild(input)
        f.submit()
        document.body.removeChild(f)
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-wrapper {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .rotate-banner {
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: #fcff58;
    opacity: 0.6;
  }

  .divider {
    border-bottom: 1px solid rgba(7, 17, 27, 0.2);
  }

  .form-wrapper {
    padding: 10px
  }

  .search-wrapper {
    width: 100%;
    padding: 10px 20px;
    text-align: center;
  }

  .el-select, .el-input, .el-radio-group {
    width: 100%;
  }

  .condition-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  .warning-message{
    margin-top: 20px;
  }
  .submit-buttons {
    margin-top: 20px;
  }
</style>
