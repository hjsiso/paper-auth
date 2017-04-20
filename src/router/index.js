import Vue from 'vue'
import Router from 'vue-router'
import Spa from '@/components/Spa'
import auth from '../auth'

Vue.use(Router)

const routes = [
  { path: '/classes', component: Spa },
  { path: '/', redirect: 'classes' }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  auth.authUser().then(() => {
    next()
  })
})

export default router
