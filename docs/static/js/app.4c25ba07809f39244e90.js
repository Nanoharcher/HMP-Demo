webpackJsonp([1],{"02z3":function(e,t){},"2VXb":function(e,t){},"4dOR":function(e,t){},"6hwb":function(e,t){},CcfL:function(e,t){},"E8/F":function(e,t){},MlWY:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navigation-wrapper"},[a("el-menu",{staticClass:"navigation-content",attrs:{mode:"horizontal","background-color":"#409eff","text-color":"#fff","active-text-color":"#ffd04b",router:!0}},[a("el-menu-item",{attrs:{index:"1"}},[e._v("资源统计")]),e._v(" "),a("el-menu-item",{attrs:{index:"2"}},[e._v("作业统计")]),e._v(" "),a("el-menu-item",{attrs:{index:"3"}},[e._v("Hadoop")]),e._v(" "),a("el-menu-item",{attrs:{index:"4"}},[e._v("LS平台")]),e._v(" "),a("el-menu-item",{attrs:{index:"5"}},[e._v("HMPClient")]),e._v(" "),a("el-menu-item",{attrs:{index:"6"}},[e._v("帮助")])],1)],1)},staticRenderFns:[]};var r=a("VU/8")({name:"Navigation",methods:{}},l,!1,function(e){a("mLFA")},"data-v-c771841a",null).exports,o={name:"SideMenu",data:function(){return{screenWidth:document.body.clientWidth,isCollapse:!(document.body.clientWidth>1024)}},mounted:function(){var e=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(e.screenWidth=window.screenWidth)}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}},watch:{screenWidth:function(e){this.screenWidth=e,this.screenWidth<=1024?this.isCollapse=!0:this.isCollapse=!1}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-menu",{staticClass:"sidebar-content",attrs:{"default-active":this.$route.path,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse,router:!0},on:{open:e.handleOpen,close:e.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("span",[e._v("Job管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"/JobList"}},[e._v("Job注册列表")]),e._v(" "),a("el-menu-item",{attrs:{index:"/JobCreate"}},[e._v("Job注册")]),e._v(" "),a("el-menu-item",{attrs:{index:"1-3"}},[e._v("Job上线")]),e._v(" "),a("el-menu-item",{attrs:{index:"1-4"}},[e._v("Job管控记录")]),e._v(" "),a("el-menu-item",{attrs:{index:"1-5"}},[e._v("运行中任务管理")])],2),e._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-setting"}),e._v(" "),a("span",[e._v("mpi管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"2-1"}},[e._v("mpi任务kill列表")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-2"}},[e._v("mpi注册列表")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-3"}},[e._v("mpiJob注册")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-4"}},[e._v("mpi高级管理")])],2),e._v(" "),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("span",[e._v("存储管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"2-1"}},[e._v("目录自动清理")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-2"}},[e._v("业务存储分配")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-3"}},[e._v("存储分配列表")])],2)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(o,s,!1,function(e){a("CcfL")},"data-v-7e82c4ae",null).exports,c=(a("qb6w"),a("4dOR"),a("Bb4J"),a("3aVD"),a("nlis"),a("WUdE"),a("llPT"),{name:"App",data:function(){return{user:"马旭骁"}},components:{Navigation:r,SideMenu:n}}),u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("el-container",{staticClass:"content-wrapper"},[a("el-header",{staticClass:"header-wrapper"},[a("div",{staticClass:"logo-wrapper",attrs:{onclick:"document.location.href='#'"}},[a("span",{staticClass:"logo-title"},[e._v("FEED-HMP平台")])]),e._v(" "),a("div",{staticClass:"navigation-wrapper"},[a("Navigation")],1),e._v(" "),a("div",{staticClass:"login-wrapper"},[a("div",{staticClass:"login-button-wrapper"},[a("el-dropdown",{staticClass:"login-dropdown",attrs:{trigger:"click",size:"mini","split-button":"",type:"success"}},[a("span",{staticClass:"login-username"},[e._v(e._s(this.user))]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("帮助文档")]),e._v(" "),a("el-dropdown-item",[e._v("帮助文档")]),e._v(" "),a("el-dropdown-item",[e._v("帮助文档")]),e._v(" "),a("el-dropdown-item",[e._v("帮助文档")]),e._v(" "),a("el-dropdown-item",[e._v("帮助文档")])],1)],1)],1)])]),e._v(" "),a("el-container",{staticClass:"body-wrapper"},[a("el-aside",{staticClass:"sidebar-wrapper"},[a("SideMenu")],1),e._v(" "),a("el-main",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(e){a("6hwb")},null,null).exports,p=a("/ocq"),m=a("hddm"),b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"form-wrapper"},[a("el-form",{ref:"ruleForm",attrs:{model:e.jobCreateForm,rules:e.rules,"label-width":"110px"}},[a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{name:"1"}},[a("template",{slot:"title"},[a("p",{staticClass:"condition-title"},[e._v("任务信息")])]),e._v(" "),a("div",{staticClass:"task-info"},[a("el-row",{staticClass:"search-rows",attrs:{gutter:20}},[a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"任务名",prop:"jobname"}},[a("el-input",{attrs:{placeholder:"请选择任务名"},model:{value:e.jobCreateForm.jobname,callback:function(t){e.$set(e.jobCreateForm,"jobname",t)},expression:"jobCreateForm.jobname"}}),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("每个任务一条纪录, "),a("span",{staticStyle:{color:"red"}},[a("b",[e._v('请去掉任务名结尾的"_日期"')])]),e._v(", 如任务名:\n                      feed_production_[time]_xxx_20171111, 注册名: feed_production_[time]_xxx，time的取值为hour或day或other\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-question"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"业务线",prop:"busConfigId"}},[a("el-select",{attrs:{placeholder:"请选择业务线"},model:{value:e.jobCreateForm.busConfigId,callback:function(t){e.$set(e.jobCreateForm,"busConfigId",t)},expression:"jobCreateForm.busConfigId"}},[a("el-option",{attrs:{label:"测试数据",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"测试数据",value:"test2"}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("若不存在，请联系管理员")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-question"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"告警邮件",prop:"mails"}},[a("el-input",{attrs:{placeholder:"请输入告警邮件"},model:{value:e.jobCreateForm.mails,callback:function(t){e.$set(e.jobCreateForm,"mails",t)},expression:"jobCreateForm.mails"}}),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("可只写前缀, 多个逗号分隔")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-question"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"作业组名称",prop:"groupName"}},[a("el-input",{attrs:{placeholder:"请输入作业组名称"},model:{value:e.jobCreateForm.groupName,callback:function(t){e.$set(e.jobCreateForm,"groupName",t)},expression:"jobCreateForm.groupName"}})],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"作业描述",prop:"jobDesc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.jobCreateForm.jobDesc,callback:function(t){e.$set(e.jobCreateForm,"jobDesc",t)},expression:"jobCreateForm.jobDesc"}}),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("输入、输出和功能描述, <100字")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-question"}})],1)],1)],1)],1)],1)],2),e._v(" "),a("el-collapse-item",{attrs:{name:"2"}},[a("template",{slot:"title"},[a("p",{staticClass:"condition-title"},[e._v("队列信息")])]),e._v(" "),a("div",{staticClass:"queue-info"},[a("el-row",{staticClass:"search-rows",attrs:{gutter:20}},[a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"集群",prop:"cluster"}},[a("el-select",{attrs:{placeholder:"请选择集群"},model:{value:e.jobCreateForm.cluster,callback:function(t){e.$set(e.jobCreateForm,"cluster",t)},expression:"jobCreateForm.cluster"}},[a("el-option",{attrs:{label:"测试数据",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"测试数据",value:"test2"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"队列",prop:"queue"}},[a("el-select",{attrs:{placeholder:"请选择队列"},model:{value:e.jobCreateForm.queue,callback:function(t){e.$set(e.jobCreateForm,"queue",t)},expression:"jobCreateForm.queue"}},[a("el-option",{attrs:{label:"测试数据",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"测试数据",value:"test2"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"跨队列调度",prop:"dispatch"}},[a("el-select",{model:{value:e.jobCreateForm.dispatch,callback:function(t){e.$set(e.jobCreateForm,"dispatch",t)},expression:"jobCreateForm.dispatch"}},[a("el-option",{attrs:{label:"开启",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"关闭",value:"test2"}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n                      自动选择空闲队列，以减少任务积压。提交任务必须使用\n                      "),a("b",[a("a",{attrs:{href:"http://wiki.baidu.com/pages/viewpage.action?pageId=467671033",target:"_blank"}},[e._v("HMPClient")])]),e._v("\n                      ，小流量阶段适用范围"),a("b",[a("a",{attrs:{href:"http://wiki.baidu.com/pages/viewpage.action?pageId=490079170",target:"_blank"}},[e._v("\n                      说明")])])]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-question"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"UGI",prop:"ugi"}},[a("el-input",{attrs:{placeholder:"请输入UGI"},model:{value:e.jobCreateForm.ugi,callback:function(t){e.$set(e.jobCreateForm,"ugi",t)},expression:"jobCreateForm.ugi"}})],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"优先级",prop:"priority"}},[a("el-select",{attrs:{placeholder:"请选择优先级"},model:{value:e.jobCreateForm.priority,callback:function(t){e.$set(e.jobCreateForm,"priority",t)},expression:"jobCreateForm.priority"}},[a("el-option",{attrs:{label:"VERY_HIGH",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"HIGH",value:"test2"}}),e._v(" "),a("el-option",{attrs:{label:"NORMAL",value:"test3"}}),e._v(" "),a("el-option",{attrs:{label:"LOW",value:"test4"}}),e._v(" "),a("el-option",{attrs:{label:"VERY_LOW",value:"test5"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"Map并发",prop:"mapCapacity"}},[a("el-input",{attrs:{placeholder:"请输入Map并发"},model:{value:e.jobCreateForm.mapCapacity,callback:function(t){e.$set(e.jobCreateForm,"mapCapacity",t)},expression:"jobCreateForm.mapCapacity"}})],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"Reduce并发",prop:"reduceCapacity"}},[a("el-input",{attrs:{placeholder:"请输入Reduce并发"},model:{value:e.jobCreateForm.reduceCapacity,callback:function(t){e.$set(e.jobCreateForm,"reduceCapacity",t)},expression:"jobCreateForm.reduceCapacity"}})],1)],1),e._v(" "),a("el-col",{staticClass:"search-item switch-wrapper",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"有输出路径",prop:"hasOutputYes"}},[a("el-switch",{model:{value:e.jobCreateForm.hasOutputYes,callback:function(t){e.$set(e.jobCreateForm,"hasOutputYes",t)},expression:"jobCreateForm.hasOutputYes"}})],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"输出路径",prop:"output"}},[a("el-input",{attrs:{placeholder:"请输入输出路径"},model:{value:e.jobCreateForm.output,callback:function(t){e.$set(e.jobCreateForm,"output",t)},expression:"jobCreateForm.output"}}),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n                      真实全路径, 时间部分请替换: yyyyMM, yyyyMMdd, yyyyMMddHH, yyyyMMdd_HH, yyyyMMdd/HH, yyyyMMdd/HHmm"),a("br"),e._v("\n                      输出路径格式: {fs.default.name}/ user/ {UGI中的账号名}/ job_data/ production|development/ {业务线}/ {个人目录}"),a("br"),e._v("\n                      如：afs://tianqi.afs.baidu.com:9902/user/feed_video/job_data/production/haokan/robin/yyyyMMdd\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-question"}})],1)],1)],1)],1)],1)],2),e._v(" "),a("el-collapse-item",{attrs:{name:"3"}},[a("template",{slot:"title"},[a("p",{staticClass:"condition-title"},[e._v("其他信息")])]),e._v(" "),a("div",{staticClass:"other-info"},[a("el-row",{staticClass:"search-rows",attrs:{gutter:20}},[a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"临时任务期限",prop:"validDay"}},[a("el-input",{attrs:{placeholder:"请输入天数",disabled:!e.jobCreateForm.hasvalidDay},model:{value:e.jobCreateForm.validDay,callback:function(t){e.$set(e.jobCreateForm,"validDay",t)},expression:"jobCreateForm.validDay"}},[a("el-switch",{attrs:{slot:"prepend"},slot:"prepend",model:{value:e.jobCreateForm.hasvalidDay,callback:function(t){e.$set(e.jobCreateForm,"hasvalidDay",t)},expression:"jobCreateForm.hasvalidDay"}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("0-30天, 0:非临时任务")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-question"}})],1)],1)],1)],1)],1)],2)],1),e._v(" "),a("p",{staticClass:"warning-message"},[a("b",[e._v("注意: ")]),a("b",{staticStyle:{color:"red"}},[e._v("请务必保证注册信息的真实性，以免影响任务正常运行。注册后在统一时间点审批，紧急任务可联系平台管理员审批！")])]),e._v(" "),a("el-row",{staticClass:"submit-buttons",attrs:{type:"flex",justify:"end"}},[a("el-button",{attrs:{type:"primary"}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"default"}},[e._v("返回")])],1)],1)],1)])},staticRenderFns:[]};var h=function(e){a("E8/F")},f=a("VU/8")(m.a,b,!1,h,"data-v-0f360e94",null).exports,v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-wrapper"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"作业名"}},[a("el-input",{attrs:{placeholder:"请输入作业名"},model:{value:e.form.jobName,callback:function(t){e.$set(e.form,"jobName",t)},expression:"form.jobName"}})],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"业务线"}},[a("el-select",{staticClass:"single-selector",attrs:{placeholder:"请选择业务线"},model:{value:e.form.busConfigId,callback:function(t){e.$set(e.form,"busConfigId",t)},expression:"form.busConfigId"}},[a("el-option",{attrs:{label:"测试数据1",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"测试数据2",value:"test2"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"集群"}},[a("el-select",{staticClass:"single-selector",attrs:{placeholder:"请选择集群"},model:{value:e.form.cluster,callback:function(t){e.$set(e.form,"cluster",t)},expression:"form.cluster"}},[a("el-option",{attrs:{label:"测试数据1",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"测试数据2",value:"test2"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"队列"}},[a("el-select",{staticClass:"single-selector",attrs:{placeholder:"请选择队列"},model:{value:e.form.queue,callback:function(t){e.$set(e.form,"queue",t)},expression:"form.queue"}},[a("el-option",{attrs:{label:"测试数据1",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"测试数据2",value:"test2"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"创建者"}},[a("el-input",{attrs:{placeholder:"请输入创建者"},model:{value:e.form.creater,callback:function(t){e.$set(e.form,"creater",t)},expression:"form.creater"}})],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"优先级"}},[a("el-select",{staticClass:"single-selector",attrs:{placeholder:"请选择优先级"},model:{value:e.form.queue,callback:function(t){e.$set(e.form,"queue",t)},expression:"form.queue"}},[a("el-option",{attrs:{label:"VERY_HIGH",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"HIGH",value:"test2"}}),e._v(" "),a("el-option",{attrs:{label:"NORMAL",value:"test3"}}),e._v(" "),a("el-option",{attrs:{label:"LOW",value:"test4"}}),e._v(" "),a("el-option",{attrs:{label:"VERY_LOW",value:"test5"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:12,md:12,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticClass:"single-selector",attrs:{placeholder:"请选择状态"},model:{value:e.form.queue,callback:function(t){e.$set(e.form,"queue",t)},expression:"form.queue"}},[a("el-option",{attrs:{label:"正常",value:"test1"}}),e._v(" "),a("el-option",{attrs:{label:"待审核",value:"test2"}}),e._v(" "),a("el-option",{attrs:{label:"待签到",value:"test3"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"search-item",attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[a("el-row",{staticClass:"search-buttons",attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"primary"}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("创建")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")({name:"Search",data:function(){return{form:{jobName:"",busConfigId:"",cluster:"",queue:"",creater:"",priority:"",jobStatus:""}}}},v,!1,function(e){a("2VXb")},null,null).exports,y=a("NZrs"),C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table-wrapper table-responsive"},[t("table",{attrs:{id:"table","data-show-columns":"false"}})])}]};var x=function(e){a("02z3")},g={name:"HomePage",components:{Search:_,TableContent:a("VU/8")(y.a,C,!1,x,"data-v-7757893f",null).exports}},j={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"divider"}),this._v(" "),t("el-container",[t("search")],1),this._v(" "),t("el-container",[t("table-content")],1)],1)},staticRenderFns:[]};var w=a("VU/8")(g,j,!1,function(e){a("MlWY")},"data-v-b0881668",null).exports;i.default.use(p.a);var H=new p.a({routes:[{path:"/",redirect:"/JobList"},{path:"/JobList",name:"JobList",component:w,meta:{title:"HMP平台"}},{path:"/JobCreate",name:"JobCreate",component:f,meta:{title:"HMP平台"}}]}),k=(a("7t+N"),a("zL8q")),$=a.n(k),q=(a("tvR6"),a("XToC")),F=a.n(q);i.default.config.productionTip=!1,i.default.use($.a),i.default.use(F.a),new i.default({el:"#app",router:H,components:{App:d},template:"<App/>"}),H.beforeEach(function(e,t,a){e.meta.title&&(document.title=e.meta.title,a())})},NZrs:function(e,t,a){"use strict";(function(e){var i=a("qb6w"),l=(a.n(i),a("4dOR")),r=(a.n(l),a("Bb4J")),o=(a.n(r),a("3aVD")),s=(a.n(o),a("nlis")),n=(a.n(s),a("WUdE")),c=(a.n(n),a("llPT")),u=(a.n(c),[{title:"作业名",field:"jobName",class:"text-nowrap",halign:"center",valign:"middle"},{title:"集群",field:"cluster",class:"text-nowrap",halign:"center",valign:"middle"},{title:"队列",field:"queue",class:"text-nowrap",halign:"center",valign:"middle"},{title:"优先级",field:"priority",class:"text-nowrap",halign:"center",valign:"middle"},{title:"状态",field:"jobStatus",class:"text-nowrap",halign:"center",valign:"middle"},{title:"map并发",field:"mapCapacity",class:"text-nowrap",halign:"center",valign:"middle",sortable:!0},{title:"reduce并发",field:"reduceCapacity",class:"text-nowrap",halign:"center",valign:"middle",sortable:!0},{title:"创建者",field:"creater",class:"text-nowrap",halign:"center",valign:"middle"},{title:"创建时间",field:"creatTime",class:"text-nowrap",halign:"center",valign:"middle"},{title:"操作",field:"callbackClickSource",class:"text-nowrap",halign:"center",valign:"middle",formatter:function(e,t){for(var a=e.replace(/\[|\]|\s+/g,"").split(","),i="",l=0;l<a.length;l++)"详情"===a[l]?i+='<button onclick="popupContent(this)" class="el-button el-button--primary el-button--mini popup-button" data-id="111">'+a[l]+"</button>":i+='<button onclick="popupContent(this)" class="el-button el-button--primary el-button--mini remove-button" data-id="222">'+a[l]+"</button>";return i}}]),d=[{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"},{jobName:"feed_production_day_hu_clean",cluster:"szth-taihu",queue:"feed-plat-mix",priority:"HIGH",jobStatus:"正常",mapCapacity:"1000",reduceCapacity:"500",creater:"hujianyuan",creatTime:"2018-10-15 12:45:36",callbackClickSource:"[详情,修改,操作,移除]"}],p=[{title:"姓名",field:"name",class:"text-nowrap",halign:"center",valign:"middle"},{title:"年龄",field:"age",class:"text-nowrap",halign:"center",valign:"middle"},{title:"性别",field:"gender",class:"text-nowrap",halign:"center",valign:"middle"}],m=[{name:"马旭骁",age:"25",gender:"男"},{name:"马旭骁",age:"25",gender:"男"},{name:"马旭骁",age:"25",gender:"男"},{name:"马旭骁",age:"25",gender:"男"},{name:"马旭骁",age:"25",gender:"男"}],b=["标题","日志类型","tab页"];t.a={name:"TableContent",data:function(){return{tableheader:u,tabledata:d,popuptableheader:p,popuptabledata:m}},methods:{popup:function(t){"111"===e(t).attr("data-id")&&(e.magnificPopup.open({items:{src:'<div class="white-popup"><table id="popup-table"></table></div>',type:"inline",closeOnContentClick:!0,image:{verticalFit:!0}}}),e("#popup-table").bootstrapTable("destroy").bootstrapTable({columns:this.popuptableheader,data:this.popuptabledata,toolbar:".toolbar"}))}},created:function(){e("head").append("<style>.white-popup { position: relative; background: #FFF; padding: 20px; width: auto; max-width: 500px; margin: 20px auto; }</style>")},mounted:function(){var t,a=this,i=e("#table");if(window.popupContent=function(e){a.popup(e)},e("head").append("<style>.th-inner{color: #909399;font-weight:700;}</style>"),document.body.clientWidth>1024){i.bootstrapTable("destroy").bootstrapTable({columns:this.tableheader,data:this.tabledata,pagination:!0,toolbar:".toolbar",fixedColumns:!0,paginationPreText:"Previous",paginationNextText:"Next",paginationVAlign:"top",pageSize:25,fixedNumber:1}),t=e("#table th .th-inner");for(var l=0;l<t.length;l++){var r=t[l].innerHTML;b.includes(r)&&(t[l].innerHTML='<a href="https://www.baidu.com" target="_blank">'+r+"</a>")}}else{i.bootstrapTable("destroy").bootstrapTable({columns:this.tableheader,data:this.tabledata,pagination:!0,toolbar:".toolbar",fixedColumns:!1,paginationPreText:"Previous",paginationNextText:"Next",paginationVAlign:"top",pageSize:25}),t=e("#table th .th-inner");for(var o=0;o<t.length;o++){var s=t[o].innerHTML;b.includes(s)&&(t[o].innerHTML='<a href="https://www.baidu.com" target="_blank">'+s+"</a>")}}}}}).call(t,a("7t+N"))},WUdE:function(e,t,a){(function(e){!function(e){"use strict";e.extend(e.fn.bootstrapTable.defaults,{fixedColumns:!1,fixedNumber:1});var t=e.fn.bootstrapTable.Constructor,a=t.prototype.initHeader,i=t.prototype.initBody,l=t.prototype.resetView;t.prototype.initFixedColumns=function(){this.$fixedHeader=e(['<div class="fixed-table-header-columns">',"<table>","<thead></thead>","</table>","</div>"].join("")),this.timeoutHeaderColumns_=0,this.$fixedHeader.find("table").attr("class",this.$el.attr("class")),this.$fixedHeaderColumns=this.$fixedHeader.find("thead"),this.$tableHeader.before(this.$fixedHeader),this.$fixedBody=e(['<div class="fixed-table-body-columns">',"<table>","<tbody></tbody>","</table>","</div>"].join("")),this.timeoutBodyColumns_=0,this.$fixedBody.find("table").attr("class",this.$el.attr("class")),this.$fixedBodyColumns=this.$fixedBody.find("tbody"),this.$tableBody.before(this.$fixedBody)},t.prototype.initHeader=function(){if(a.apply(this,Array.prototype.slice.apply(arguments)),this.options.fixedColumns){this.initFixedColumns();var t=this,i=this.$header.find("tr").clone();i.each(function(){e(this).find("th:gt("+(t.options.fixedNumber-1)+")").remove()}),this.$fixedHeaderColumns.html("").append(i)}},t.prototype.initBody=function(){if(i.apply(this,Array.prototype.slice.apply(arguments)),this.options.fixedColumns){var t=this,a=0;this.$fixedBodyColumns.html(""),this.$body.find("> tr[data-index]").each(function(){var i=e(this).clone(),l=i.find("td"),r=e("<tr></tr>");r.attr("data-index",i.attr("data-index")),r.attr("data-uniqueid",i.attr("data-uniqueid"));var o=t.options.fixedNumber;a>0&&(--o,--a);for(var s=0;s<o;s++)r.append(l.eq(s).clone());t.$fixedBodyColumns.append(r),l.eq(0).attr("rowspan")&&(a=l.eq(0).attr("rowspan")-1)})}},t.prototype.resetView=function(){l.apply(this,Array.prototype.slice.apply(arguments)),this.options.fixedColumns&&(clearTimeout(this.timeoutHeaderColumns_),this.timeoutHeaderColumns_=setTimeout(e.proxy(this.fitHeaderColumns,this),this.$el.is(":hidden")?100:0),clearTimeout(this.timeoutBodyColumns_),this.timeoutBodyColumns_=setTimeout(e.proxy(this.fitBodyColumns,this),this.$el.is(":hidden")?100:0))},t.prototype.fitHeaderColumns=function(){var t=this,a=this.getVisibleFields(),i=0;this.$body.find("tr:first-child:not(.no-records-found) > *").each(function(l){var r=e(this),o=l;if(l>=t.options.fixedNumber)return!1;t.options.detailView&&!t.options.cardView&&(o=l-1),t.$fixedHeader.find('th[data-field="'+a[o]+'"]').find(".fht-cell").width(r.innerWidth()),i+=r.outerWidth()}),this.$fixedHeader.width(i).show()},t.prototype.fitBodyColumns=function(){var t=this,a=-parseInt(this.$el.css("margin-top")),i=this.$tableBody.height()-18;this.$body.find("> tr[data-index]").length?(this.options.height||(i-=a=this.$fixedHeader.height()-1),this.$fixedBody.css({width:this.$fixedHeader.width(),height:i+3,top:a+1}).show(),this.$body.find("> tr").each(function(a){t.$fixedBody.find("tr:eq("+a+")").height(e(this).height()-.5);var i=this;t.$fixedBody.find("tr:eq("+a+")").find("td").each(function(t){e(this).width(e(e(i).find("td")[t]).width()+1)})}),this.$tableBody.on("scroll",function(){t.$fixedBody.find("table").css("top",-e(this).scrollTop())}),this.$body.find("> tr[data-index]").off("hover").hover(function(){var a=e(this).data("index");t.$fixedBody.find('tr[data-index="'+a+'"]').addClass("hover")},function(){var a=e(this).data("index");t.$fixedBody.find('tr[data-index="'+a+'"]').removeClass("hover")}),this.$fixedBody.find("tr[data-index]").off("hover").hover(function(){var a=e(this).data("index");t.$body.find('tr[data-index="'+a+'"]').addClass("hover")},function(){var a=e(this).data("index");t.$body.find('> tr[data-index="'+a+'"]').removeClass("hover")})):this.$fixedBody.hide()}}(e)}).call(t,a("7t+N"))},hddm:function(e,t,a){"use strict";(function(e){t.a={name:"JobCreate",created:function(){e("head").append("<style>.el-collapse-item__arrow{float:left!important}</style>")},data:function(){return{notMobile:document.body.clientWidth>1024,activeNames:["1","2","3"],jobCreateForm:{jobname:"",busConfigId:"",dispatch:"test1",cluster:"",queue:"",priority:"test3",ugi:"",mapCapacity:"500",reduceCapacity:"500",hasOutputYes:!0,groupName:"",output:"",mails:"",validDay:"0",hasvalidDay:!1,jobDesc:""},rules:{jobname:[{required:!0,message:"请输入任务名",trigger:"blur"}],busConfigId:[{required:!0,message:"请输入业务线",trigger:"blur"}],dispatch:[{required:!0,message:"请选择跨队列调度",trigger:"blur"}],cluster:[{required:!0,message:"请选择集群",trigger:"blur"}],queue:[{required:!0,message:"请选择队列",trigger:"blur"}],priority:[{required:!1,message:"请选择优先级",trigger:"blur"}],ugi:[{required:!0,message:"请输入UGI",trigger:"blur"}],mapCapacity:[{required:!0,message:"请输入Map并发",trigger:"blur"}],reduceCapacity:[{required:!0,message:"请输入Reduce并发",trigger:"blur"}],hasOutputYes:[{required:!1,message:"请选择是否有输出路径",trigger:"blur"}],groupName:[{required:!1,message:"请输入作业组名称",trigger:"blur"}],output:[{required:!0,message:"请输入输出路径",trigger:"blur"}],mails:[{required:!1,message:"请输入告警邮件",trigger:"blur"}],validDay:[{required:!1,message:"请输入天数",trigger:"blur"}],jobDesc:[{required:!0,message:"请输入作业描述",trigger:"blur"}]}}},methods:{doFollowHiPu:function(e){var t=document.createElement("form");document.body.appendChild(t),t.setAttribute("action","baidu://message");var a=document.createElement("input");a.setAttribute("name","appid"),a.setAttribute("value",e),a.setAttribute("type","hidden"),t.appendChild(a),t.submit(),document.body.removeChild(t)},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}}}).call(t,a("7t+N"))},llPT:function(e,t){},mLFA:function(e,t){},nlis:function(e,t){},qb6w:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4c25ba07809f39244e90.js.map