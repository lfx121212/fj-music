import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from "./router";
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vIcon from '@/components/common/v-icon'

Vue.component('vIcon',vIcon)
Vue.config.productionTip = false
Vue.use(ElementUI,$)
Vue.use(Vuex)

new Vue({
  store : new Vuex.Store(store),
  router,
  render: h => h(App),
}).$mount('#app')
