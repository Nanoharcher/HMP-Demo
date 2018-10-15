<template>
    <div class="table-wrapper table-responsive">
      <!--<div class="table-title">搜索结果</div>-->
      <!--<div class="divider"></div>-->
      <table id="table" data-show-columns="false"></table>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap-table/dist/bootstrap-table.min.css'
  import 'bootstrap/dist/js/bootstrap.min'
  import 'bootstrap-table/dist/bootstrap-table.min'
  import '../../static/css/bootstrap-table-fixed-columns.css'
  import '../../static/js/bootstrap-table-fixed-columns.js'
  import 'magnific-popup/dist/magnific-popup.css'
  var tableheader = [
    { title: '作业名', field: 'jobName', class: 'text-nowrap', halign: 'center', valign: 'middle' },
    { title: '集群', field: 'cluster', class: 'text-nowrap', halign: 'center', valign: 'middle' },
    { title: '队列', field: 'queue', class: 'text-nowrap', halign: 'center', valign: 'middle' },
    { title: '优先级', field: 'priority', class: 'text-nowrap', halign: 'center', valign: 'middle' },
    { title: '状态', field: 'jobStatus', class: 'text-nowrap', halign: 'center', valign: 'middle' },
    { title: 'map并发', field: 'mapCapacity', class: 'text-nowrap', halign: 'center', valign: 'middle', sortable: true },
    { title: 'reduce并发', field: 'reduceCapacity', class: 'text-nowrap', halign: 'center', valign: 'middle', sortable: true },
    { title: '创建者', field: 'creater', class: 'text-nowrap', halign: 'center', valign: 'middle' },
    { title: '创建时间', field: 'creatTime', class: 'text-nowrap', halign: 'center', valign: 'middle' },
    { title: '操作', field: 'callbackClickSource', class: 'text-nowrap', halign: 'center', valign: 'middle', formatter: buttonFormatter }
  ]
  var tabledata = [
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    },
    {
      jobName: 'feed_production_day_hu_clean',
      cluster: 'szth-taihu',
      queue: 'feed-plat-mix',
      priority: 'HIGH',
      jobStatus: '正常',
      mapCapacity: '1000',
      reduceCapacity: '500',
      creater: 'hujianyuan',
      creatTime: '2018-10-15 12:45:36',
      callbackClickSource: '[详情,修改,操作,移除]'
    }
  ]
  var popuptableheader = [
    {title: '姓名', field: 'name', class: 'text-nowrap', halign: 'center', valign: 'middle'},
    {title: '年龄', field: 'age', class: 'text-nowrap', halign: 'center', valign: 'middle'},
    {title: '性别', field: 'gender', class: 'text-nowrap', halign: 'center', valign: 'middle'}
  ]
  var popuptabledata = [
    {
      name: '马旭骁',
      age: '25',
      gender: '男'
    },
    {
      name: '马旭骁',
      age: '25',
      gender: '男'
    },
    {
      name: '马旭骁',
      age: '25',
      gender: '男'
    },
    {
      name: '马旭骁',
      age: '25',
      gender: '男'
    },
    {
      name: '马旭骁',
      age: '25',
      gender: '男'
    }
  ]
  var linkheader = ['标题', '日志类型', 'tab页']
  // eslint-disable-next-line no-unused-vars
  function buttonFormatter (value, row) {
    let buttonText = value.replace(/\[|\]|\s+/g, '').split(',')
    var template = ''
    for (let i = 0; i < buttonText.length; i++) {
      if (buttonText[i] === '详情') {
        template += '<button onclick="popupContent(this)" class="el-button el-button--primary el-button--mini popup-button" data-id="111">' + buttonText[i] + '</button>'
      } else {
        template += '<button onclick="popupContent(this)" class="el-button el-button--primary el-button--mini remove-button" data-id="222">' + buttonText[i] + '</button>'
      }
    }
    return template
  }
  export default {
    name: 'TableContent',
    data () {
      return {
        tableheader: tableheader,
        tabledata: tabledata,
        popuptableheader: popuptableheader,
        popuptabledata: popuptabledata
      }
    },
    methods: {
      popup (e) {
        var data = $(e).attr('data-id')
        if (data === '111') {
          $.magnificPopup.open({
            items: {
              src: '<div class="white-popup"><table id="popup-table"></table></div>',
              type: 'inline',
              closeOnContentClick: true,
              image: {
                verticalFit: true
              }
            }
          })
          var $table = $('#popup-table')
          $table.bootstrapTable('destroy').bootstrapTable({
            columns: this.popuptableheader,
            data: this.popuptabledata,
            // search: true,
            // pagination: true,
            toolbar: '.toolbar'
            // pageSize: 50,
          })
        }
      }
    },
    created () {
      $('head').append('<style>.white-popup { position: relative; background: #FFF; padding: 20px; width: auto; max-width: 500px; margin: 20px auto; }</style>')
    },
    mounted () {
      var $table = $('#table')
      var tableHeader
      window['popupContent'] = (e) => {
        this.popup(e)
      }
      $('head').append('<style>.th-inner{color: #909399;font-weight:700;}</style>')
      if (document.body.clientWidth > 1024) {
        $table.bootstrapTable('destroy').bootstrapTable({
          columns: this.tableheader,
          data: this.tabledata,
          // search: true,
          pagination: true,
          toolbar: '.toolbar',
          fixedColumns: true,
          paginationPreText: 'Previous',
          paginationNextText: 'Next',
          paginationVAlign: 'top',
          pageSize: 25,
          fixedNumber: 1
        })
        tableHeader = $('#table th .th-inner')
        // console.log(tableHeader)
        for (let i = 0; i < tableHeader.length; i++) {
          let temp = tableHeader[i].innerHTML
          if (linkheader.includes(temp)) {
            tableHeader[i].innerHTML = '<a href="https://www.baidu.com" target="_blank">' + temp + '</a>'
          }
        }
      } else {
        $table.bootstrapTable('destroy').bootstrapTable({
          columns: this.tableheader,
          data: this.tabledata,
          // search: true,
          pagination: true,
          toolbar: '.toolbar',
          fixedColumns: false,
          paginationPreText: 'Previous',
          paginationNextText: 'Next',
          paginationVAlign: 'top',
          pageSize: 25
        })
        tableHeader = $('#table th .th-inner')
        // console.log(tableHeader)
        for (let i = 0; i < tableHeader.length; i++) {
          let temp = tableHeader[i].innerHTML
          if (linkheader.includes(temp)) {
            tableHeader[i].innerHTML = '<a href="https://www.baidu.com" target="_blank">' + temp + '</a>'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .table-wrapper{
    width: 100%;
    padding: 10px;
    box-sizing:border-box;
  }
  .table-title{
    font-size:24px;
    font-weight:700;
    text-align:center;
  }
  .divider{
    margin: 5px 0;
    border: 1px solid rgba(7,17,27,0.2);
  }
  .fixed-table-pagination .dropdown-menu{
    z-index: 88;
  }
</style>
