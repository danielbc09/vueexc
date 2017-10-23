import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
Vue.component('header-server', Header)
Vue.component('app-footer', Footer)
new Vue({
  el: '#app',
  render: h => h(App)
})
