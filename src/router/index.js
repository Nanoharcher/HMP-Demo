import Vue from 'vue'
import Router from 'vue-router'
import JobCreate from '@/components/JobCreate'
import JobList from '@/components/JobList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/JobList'},
    {path: '/JobList', name: 'JobList', component: JobList, meta: {title: 'HMP平台'}},
    {path: '/JobCreate', name: 'JobCreate', component: JobCreate, meta: {title: 'HMP平台'}}
  ]
})
