import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
=======
import Index from '@/views/Index'
>>>>>>> ec3bf67960aaa9fbd365722ab03032a439ea301d

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
=======
    {path: '/',component: Index,name: '商城首页'}
>>>>>>> ec3bf67960aaa9fbd365722ab03032a439ea301d
  ]
})
