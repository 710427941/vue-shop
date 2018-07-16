// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/vant-css/index.css';
import {Lazyload,List,Row,Col,Button} from 'vant'
Vue.use(Lazyload).use(List).use(Row).use(Col).use(Button)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
