// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'
import QS from 'qs'
import ElementUI from 'element-ui'
import './assets/css/font-awesome.css'
import './assets/css/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios
Vue.prototype.$qs = QS
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.filter('number', v => {
  if (v > 10000) {
    return (v / 10000).toFixed() + '万'
  }
  return v
})

Vue.filter('message', v => {
  if (v.length > 12) {
    return v.substr(0, 10) + '...'
  }
  return v
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
