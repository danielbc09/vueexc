import Vue from 'vue'
import App from './App.vue'
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'

export const serverBus = new Vue();

Vue.component('header-server', Header)
Vue.component('app-footer', Footer)
new Vue({
  el: '#app',
  render: h => h(App)
})
