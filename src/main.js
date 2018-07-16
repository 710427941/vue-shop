<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
=======
import Vue from 'vue'
import App from './App'
import router from './router'
import {Lazyload,List,Row,Col,Button} from 'vant'


Vue.use(Lazyload).use(List).use(Row).use(Col).use(Button)
>>>>>>> ec3bf67960aaa9fbd365722ab03032a439ea301d

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
  components: { App },
  template: '<App/>'
=======
  render: h => h(App)
>>>>>>> ec3bf67960aaa9fbd365722ab03032a439ea301d
})
