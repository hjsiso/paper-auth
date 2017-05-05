// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import { firebaseConfig } from './configs'
import VueFilter from 'vue-filter'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })
//import 'normalize.css'


Vue.use(VueFilter)
Vue.use(ElementUI)
Vue.use(VueFire)

Vue.config.productionTip = false

const initApp = () => {
  Firebase.initializeApp(firebaseConfig)
  //database.init()
}

initApp()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /*template: '<App/>',
  components: { App }*/
  render: h => h(App)
})
