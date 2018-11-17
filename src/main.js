import Vue from 'vue'
import App from './app.vue'
import store from './frontend/vuex/store'

import './frontend/sass/global.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
