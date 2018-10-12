import Vue from 'vue'
import Router from 'vue-router'
import JobCreate from '@/components/JobCreate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'JobCreate',
      component: JobCreate
    }
  ]
})
