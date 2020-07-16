import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import store from './store'
import '@/mock/mockServer'
Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
