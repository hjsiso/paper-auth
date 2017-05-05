<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/items">Go to Foo</router-link> -->

    <div class="columns" v-show="!user.uid">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {{ msg }}
              </h1>
              <div class="login" v-show="!user.uid">
                  <div id="firebaseui-auth-container"></div>
              </div>
            </div>
          </div>
        </section>
    </div>
    <router-view v-show="user.uid"></router-view>
  </div>
</template>

<script>
import auth from './auth'

const user = auth.getUser()

export default {
  name: 'app',
  data: function () {
    return {
      user,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: auth.logout
  }
}

</script>

<style>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 15px;
  width: 99%;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
