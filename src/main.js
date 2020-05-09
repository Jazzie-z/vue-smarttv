import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
Vue.config.productionTip = false

export const focusHandler = new Vue()

Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
