// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Hrader from './components/Header'
import Footer from './components/Footer'
Vue.config.productionTip = false
Vue.component('Header',Hrader)
Vue.component('Footer',Footer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
