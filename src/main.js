import Vue from 'vue'
import App from './App'
import router from './router'
import {Swipe, SwipeItem,Lazyload} from 'vant'


Vue.use(Swipe).use(SwipeItem).use(Lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
