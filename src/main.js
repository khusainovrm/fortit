import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import numberFilter from './filter/numberFilter'
import './custom.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.filter('number', numberFilter)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
