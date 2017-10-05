import Vue from 'vue'
import Router from 'vue-router'
import RootPage from '@/pages/rootPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RootPage',
      component: RootPage
    }
  ]
})
