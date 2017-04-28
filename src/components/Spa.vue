<template>
  <div class="spa">
    <topbar :visible-search='false' search-str='' :msg-inbox='getInbox' user-name='Hector Siso' :current-student='currentStudent'></topbar>

    <el-row :gutter="20">
      <el-col :span="24">
        <div>
            <el-tabs>
              <el-tab-pane label="" name="emty" disabled></el-tab-pane>
              <el-tab-pane v-for="tab in tabs_options" :key="tab.id | uppercase" :label="tab.text | uppercase" value="" active-name=""/>
            </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content">
          <div class="box-content row-margin-l">
            <div class="">
              <pre>{{ $data }}</pre>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <div class="box-content row-margin-r">
           p
          </div>
          <div class="box-content row-margin-r">
           p
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import topbar from '@/components/TopBar'

export default {
  name: 'spa',
  data () {
    return {
      tabs_options: [
        {text: "Information"},
        {text: "Tasks"},
        {text: "Documents"},
        {text: "Notes"}
      ]
      }
  },
  computed: {
      getInbox: function(){
            return true
      },
      currentStudent: function() {
          return {
            name: 'Marcela Siso',
            birday: '2010-02-08',
            curses: [
              {
                curse: 'A',
                active: false
              },
              {
                curse: 'B',
                active: false
              },
              {
                curse: 'C',
                active: false
              },
              {
                curse: '1',
                active: true
              }
            ]
          }
      }
  },
  filters: {
    uppercase: function (value) {
      if (!value) return ''
      value = value.toString().toUpperCase()
      return value
    }
  },
  components: { topbar }
}
</script>


    <style>
      .el-row {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .grid-content-l {
        border-radius: 4px;
        min-height: 36px;
        align-content: flex-start;
      }
      .grid-content-r {
        border-radius: 4px;
        min-height: 36px;
        align-content: flex-end;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
      .main-tittle-text{
        font-size: 20px;
      }
      .tittle-text{
        font-size: 18px;
      }
      .small-tittle-text{
        font-size: 16px
      }
      .body-text{
        font-size: 14px
      }
      .body-small-text{
        font-size: 13px;
      }
      .small-text{
        font-size: 12px;
      }
      .align-text-r{
        text-align: right;
      }
      .align-text-l{
        text-align: left;
      }
      .align-text-c{
        text-align: center;
      }
      .color-extra-light-black{
        color: #475669;
      }
      .color-extra-light-gray{
        color: #EFF2F7;
      }
      .color-extra-light-silver{
        color: #C0CCDA;
      }
      .color-silver{
        color: #8492A6;
      }
      .item {
        margin-top: 0px;
        margin-right: 5px;
      }
      .row-margin-l{
        margin-left: 45px;
      }
      .row-margin-r{
        margin-right: 15px;
      }
      .box-content{
        border-style: solid;
        border-width: 1px;
        border-radius: 3px;
        border-color: #EFF2F7;
        margin-bottom: 20px;
        align-content: center;
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 5px;
      }
      .popover-text{
          font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      }
      .box {
          width: 400px;
          .top {
            text-align: center;
          }

          .left {
            float: left;
            width: 110px;
          }

          .right {
            float: right;
            width: 110px;
          }

          .bottom {
            clear: both;
            text-align: center;
          }

          .item {
            margin: 4px;
          }

          .left .el-tooltip__popper,
          .right .el-tooltip__popper {
            padding: 8px 10px;
          }

          .el-button {
            width: 110px;
          }
        }

    </style>
