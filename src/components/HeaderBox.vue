<template>
  <div class="headerbox">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content-l color-extra-light-silver row-margin-l">
          <el-popover
            ref="popoverSearch"
            placement="right"
            width="160"
            v-model="visible">
              <p class="popover-text">
                <el-input
                  placeholder="Search"
                  icon="search"
                  v-model="search">
                </el-input>
              </p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
              <el-button type="primary" size="mini" @click="visible= false">search</el-button>
            </div>
          </el-popover>
          <i class="el-icon-search" v-popover:popoverSearch></i>
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content align-text-c color-extra-light-silver "><i class="el-icon-menu"></i></div></el-col>
      <el-col :span="8">
        <div class="grid-content-r small-text align-text-r row-margin-r">
          <el-badge :is-dot="msg" class="item">
            <el-button class="share-button" icon="message" :plain="true" type="info" size="mini"></el-button>
          </el-badge>
          Hello, {{user}}
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content-l tittle-text row-margin-l">{{user}}<div class="body-small-text color-extra-light-silver">Student: {{student}}</div></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8">
        <div class="grid-content-r align-text-r row-margin-r">
          <el-button  :plain="true" type="info" size="small">Settings <i class="el-icon-setting"></i></el-button>
          <el-button  type="info" size="small">Logout <i class="el-icon-circle-close"></i></el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  name: 'headerbox',
  porps: ['msg','user','student','search','visible']
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
