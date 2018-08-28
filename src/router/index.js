import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import  Index from '@/components/Index'
import Tokenised from '@/components/Tokenised'
import Projects from '@/components/Projects'
import Investor from '@/components/Investor'
import OnlineTrading from '@/components/OnlineTrading'
import InvestorOne from '@/components/Investor/InvestorOne.vue'
import InvestorPersonalInfo from '@/components/Investor/InvestorPersonalInfo.vue'
import InvestorForm2 from '@/components/Investor/InvestorForm2.vue'
import InvestorForm3 from '@/components/Investor/InvestorForm3.vue'
import InvestorForm4 from '@/components/Investor/InvestorForm4.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  // scrollBehavior(){
  //   return {x:0,y:0}
  // },
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'index',
      component: Index
    },
    {
      path: '/Tokenised',
      name: 'Tokenised',
      component: Tokenised

    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },{
      path: '/OnlineTrading',
      name: 'OnlineTrading',
      component: OnlineTrading
    },
    {
      path: '/Investor',
      name: 'Investor',
      component: Investor,
      children: [
        {
          path: '/',
          component:InvestorOne
        },
        {
          path: 'InvestorPersonalInfo',
          component: InvestorPersonalInfo
        },
        {
          path: '2',
          component: InvestorForm2
        },
        {
          path: '3',
          component: InvestorForm3
        },
        {
          path: '4',
          component: InvestorForm4
        },

      ]
    }
  ]
})
