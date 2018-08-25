import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Index from '@/components/Index'
import Tokenised from '@/components/Tokenised'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'index',
      component: Index
    },
    {
      path: '/Tokenised',
      name: 'Tokenised',
      component: Tokenised

    }
  ]
})
