import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery'

Vue.config.productionTip = false
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
