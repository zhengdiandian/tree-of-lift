// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import Hrader from './components/Header'
import Footer from './components/Footer'
// import 'element-ui/lib/theme-chalk/step.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.component('Header',Hrader)
Vue.component('Footer',Footer)
Vue.use(Element)
// Vue.component('Steps', Steps)
// Vue.component('Step', Step)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
