import './fontawesome-all'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import Store from './vuex/store.js'

import './index.html'
import './sass/global.scss'

Vue.use(Vuex)
export default {
  vm: new Vue({
    el: '#app',
    store: new Vuex.Store(Store),
    ...App
  })
}
