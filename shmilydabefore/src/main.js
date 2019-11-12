// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios'
//引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册element
Vue.use(ElementUI);
//挂载在vue的原型上
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //路由
  components: {
    App
  },
  template: '<App/>'
})
