<template>
  <div class="spa">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content-l color-extra-light-silver row-margin-l">
          <el-tooltip effect="light" content="Search student" placement="bottom-end">
            <i class="el-icon-search"></i>
          </el-tooltip>
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content align-text-c color-extra-light-silver "><i class="el-icon-menu"></i></div></el-col>
      <el-col :span="8">
        <div class="grid-content-r small-text align-text-r row-margin-r">
          <el-badge is-dot class="item">
            <el-button class="share-button" icon="message" :plain="true" type="info" size="mini"></el-button>
          </el-badge>
          Hello, {{user_name}}
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content-l tittle-text row-margin-l">{{user_name}}<div class="body-small-text color-extra-light-silver"><strong>Student:</strong> {{current_student.student_name}}</div></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8">
        <div class="grid-content-r align-text-r row-margin-r">
          <el-button  :plain="true" type="warning" size="small">Settings <i class="el-icon-setting"></i></el-button>
          <el-button  type="info" size="small" @click="logout">Logout <i class="el-icon-circle-close"></i></el-button>
        </div>
      </el-col>
    </el-row>
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
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

  </div>
</template>

<script>

import auth from '../auth'

export default {
  name: 'spa',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user_name: 'Hector Siso',
      current_student: {
        student_name: 'Marcela Siso'
      },
      tabs_options: [
        {text: "Information"},
        {text: "Tasks"},
        {text: "Documents"},
        {text: "Notes"}
      ]
      }
  },
  methods: {
    logout: auth.logout
  },
  filters: {
    uppercase: function (value) {
      if (!value) return ''
      value = value.toString().toUpperCase()
      return value
    }
  }
}
</script>


    <style>
      .el-row {
        margin-bottom: 15px;
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
