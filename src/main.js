import Vue from 'vue'
import vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
