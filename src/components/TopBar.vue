<template>
  <div class="top-bar">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content-l color-extra-light-silver row-margin-l">
          <el-popover
            ref="popoverSearch"
            placement="right"
            width="160"
            v-model="viewSearch">
              <p class="popover-text">
                <el-input
                  placeholder="Search"
                  icon="search"
                  v-model="searchStr">
                </el-input>
              </p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="viewSearch = false">cancel</el-button>
              <el-button type="primary" size="mini" @click="buscar">search</el-button>
            </div>
          </el-popover>
          <i class="el-icon-search" v-popover:popoverSearch></i>
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content align-text-c color-extra-light-silver "><i class="el-icon-menu" @click="returnHome()"></i></div></el-col>
      <el-col :span="8">
        <div class="grid-content-r small-text align-text-r row-margin-r">
          <el-badge :is-dot="viewMsgInbox" class="item">
            <el-button class="share-button" icon="message" :plain="true" type="info" size="mini" @click='readNotes'></el-button>
          </el-badge>
          Hello, {{userName}}
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content-l tittle-text row-margin-l">{{userName}}<div class="body-small-text color-extra-light-silver">Student: {{studentFullName}}</div></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8">
        <div class="grid-content-r align-text-r row-margin-r">
          <el-button  :plain="true" type="info" size="small">Settings <i class="el-icon-setting"></i></el-button>
          <el-button  type="info" size="small" @click="logout">Logout <i class="el-icon-circle-close"></i></el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'top-bar',
  props: ['searchStr', 'msgInbox', 'userName', 'currentStudent'],
  data () {
    return {
      viewSearch: false
    }
  },
  methods: {
    logout: function () {
      console.log('emitir evento logout de auth')
      this.$emit('logout')
    },
    readNotes: function () {
      console.log('emitir evento readnotes')
      //$vm0.activeTab = 'Notes'
      this.$emit('readnotes')
    },
    buscar: function () {
      this.$router.push('/search');
    },
    returnHome: function () {
      this.$router.push('/');
    }
  },
  computed: {
    viewMsgInbox: function() {
      if(this.msgInbox.length > 0){
        return true
      }else{
        return false
      }
    },
    studentFullName: function() {
      return `${this.currentStudent.firstname} ${this.currentStudent.lastname}`
    }
  }
}
</script>
