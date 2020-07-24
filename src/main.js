
import './CSS/baseStyles.scss'
import './icons'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './ElementUI'
import _ from 'lodash'
import GlobalComponents from './utils/globalComponents'
import './VeeValidate'

Vue.use(_)
Vue.use(GlobalComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
