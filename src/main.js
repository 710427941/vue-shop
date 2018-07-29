import Vue from 'vue'
import App from './App'
import router from './router'
import { Lazyload, List, Row, Col, Button, Field, NavBar, Swipe, SwipeItem, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Tab, Tabs } from 'vant'


Vue
    .use(Tab)
    .use(Tabs)
    .use(Lazyload)
    .use(List)
    .use(Row)
    .use(Col)
    .use(Button)
    .use(Field)
    .use(NavBar)
    .use(Swipe)
    .use(SwipeItem)
    .use(GoodsAction)
    .use(GoodsActionBigBtn)
    .use(GoodsActionMiniBtn)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})