import Vue from 'vue'
import App from './App'
import router from './router'
import { Lazyload, List, Row, Col, Button, Field, NavBar, Swipe, SwipeItem } from 'vant'


Vue.use(Lazyload).use(List).use(Row).use(Col).use(Button).use(Field).use(NavBar).use(Swipe).use(SwipeItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})