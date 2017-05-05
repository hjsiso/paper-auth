<template>
  <div class="info" id="info">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content">
          <div class="box-content row-margin-l">
            <div class="box-form align-text-r">
              <el-row :gutter="20">
                <el-col :span="12">
                    <avatar v-if="form.avatar" :size="70" :username="fullName" :src="form.img" style="float: right"></avatar>
                    <avatar v-else :size="70" :username="fullName" style="float: right;"></avatar>
                </el-col>
                <el-col :span="12">
                  <el-button v-if="!edit" class="share-button" icon="edit" :plain="true" type="info" size="small" @click="edit = true"></el-button>
                  <el-button v-else class="share-button" icon="circle-check" :plain="true" type="success" size="small" @click="edit = false"></el-button>
                </el-col>
              </el-row>
            </div>
            <el-form label-position="left" ref="form" :model="form" label-width="120px">
              <el-form-item label="Firts Name:" class="box-form-input">
                <el-input v-if="edit" v-model="form.firtsname"></el-input>
                <div class="color-extra-light-silver align-text-l" v-else>{{ form.firtsname }}</div>
              </el-form-item>
              <el-form-item label="Last Name:" class="box-form-input">
                <el-input v-if="edit" v-model="form.lastname"></el-input>
                <div class="color-extra-light-silver align-text-l" v-else>{{ form.lastname }}</div>
              </el-form-item>
              <el-form-item label="Birday:" class="box-form-input">
                <el-date-picker v-if="edit" v-model="form.birday" type="date" placeholder="Pick a day" format="dd-MM-yyyy" align="left"></el-date-picker>
                <div class="color-extra-light-silver align-text-l" v-else>{{ form.birday | date('%d-%m-%Y')}} ( {{ currentAge }} Years Old )</div>
              </el-form-item>
              <el-form-item label="Gender" class="box-form-input">
                <el-radio-group v-if="edit" v-model="form.gender" align="left">
                  <el-radio label="F"></el-radio>
                  <el-radio label="M"></el-radio>
                </el-radio-group>
                <div class="color-extra-light-silver align-text-l" v-else>{{ form.gender }}</div>
              </el-form-item>
            </el-form>
          </div>
        </div>

      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <div class="box-content row-margin-r">
              <div v-for="parent in parents">
                <div class="box-form">
                  <avatar v-if="parent.avatar" :size="50" :username="`${ parent.firtsname } ${ parent.lastname }`" :src="parent.img"></avatar>
                  <avatar v-else :size="50" :username="`${ parent.firtsname } ${ parent.lastname }`"></avatar>
                </div>
                <el-form label-position="left" :ref="parent.id" label-width="120px">
                  <el-form-item label="Full Name:" class="box-form-input">
                    <div class="color-extra-light-silver align-text-l" >{{ `${ parent.firtsname } ${ parent.lastname }` }}</div>
                  </el-form-item>
                  <el-form-item label="Email:" class="box-form-input">
                    <div class="color-extra-light-silver align-text-l" >{{ parent.email }}</div>
                  </el-form-item>
                </el-form>
             </div>
          </div>
          <!--<div class="box-content row-margin-r">
           p
         </div>-->
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import { AgeFromDateString } from 'age-calculator'
import { Avatar } from 'vue-avatar'

export default {
  name: 'info',
  data () {
    return {
      edit: false,
      form: {
        firtsname: 'Marcela',
        lastname: 'Siso',
        birday: '2010-02-08T04:30:00.000Z',
        gender: 'F',
        avatar: true,
        img: 'https://randomuser.me/api/portraits/women/7.jpg',
        type: [],
        resource: '',
        desc: ''
      },
      parents: [
        {id:'V12561708', firtsname: 'Héctor', lastname: 'Siso', birday: '1976-07-30', email: 'hjsiso@gmail.com', avatar: true, img:  'https://randomuser.me/api/portraits/thumb/men/47.jpg'},
        {id:'V14850979', firtsname: 'Nohemy', lastname: 'Vierma', birday: '1979-02-09', email: 'nohemyvierma@gmail.com', avatar: true, img: 'https://randomuser.me/api/portraits/thumb/women/47.jpg'}
        ]
    }
  },
  computed: {
    fullName: function() {
        return `${ this.form.firtsname } ${ this.form.lastname }`
    },
    currentAge: function() {
      let ageFromString = new AgeFromDateString(this.form.birday).age
      return ageFromString
    }
  },
  components: {
    'avatar': Avatar
  }
}
</script>

<style>
.info {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
