import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'  
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/testMain'
import nav1 from '@/components/nav1'
import nav2 from '@/components/nav2'
import nav3 from '@/components/nav3'
Vue.use(Router)
Vue.use(VueRouter) 

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { 
      path: "/", 
      redirect: "/test" 
    },//重定向,指向了testVue组件 
    {
      path: '/test',
      component: test,
      children: [  
        { 
          path: "nav1", 
          component: nav1 
        },
        { 
          path: "nav2", 
          component: nav2 
        },
        { 
          path: "nav3",
          component: nav3
        },
      ]  
    }
  ]
})
//创建路由实例  
// const router = new VueRouter({routes})    
