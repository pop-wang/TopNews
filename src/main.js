// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import style from  '@/assets/css/style.css'

import Vueaxios from  "vue-axios"
import axios from  "axios"
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
Vue.use(Vueaxios,axios);
Vue.use(style);
Vue.use(window)
axios.defaults.baseURL ='http://localhost:8080/api';
Vue.config.productionTip = false
Vue.prototype.infoID="";

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

