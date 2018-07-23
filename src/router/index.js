import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Index, name: '商城首页' },
        { path: '/register', component: Register, name: '用户注册' }
    ]
})