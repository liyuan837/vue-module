// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Mint：引入mint-ui
import Mint from 'mint-ui'
//Mint：引入css
import 'mint-ui/lib/style.css'
//Mint：安装插件
Vue.use(Mint)

//引入自己的vue组件
import App from './App'
import Home from '../../components/index/home'
import Collect from '../../components/index/collect'
import Community from '../../components/index/community'
import Cart from '../../components/index/cart'
import User from '../../components/index/user'

//Mui：引入mui的样式
import '../../static/vendor/mui/css/mui.min.css'
//Vue-router：
//创建对象并配置路由规则
let router = new VueRouter({
  linkActiveClass:'mui-active',
  routes:[
    //配置路由规则
    {
      path:'/',redirect:{name:'home'}//重定向
    },
    {
      name:'home',path:'/home',component:Home
    },
    {
      name:'collect',path:'/collect',component:Collect
    },
    {
      name:'community',path:'/community',component:Community
    },
    {
      name:'cart',path:'/cart',component:Cart
    },
    {
      name:'user',path:'/user',component:User
    }
  ]
})


//引入自己的全局样式
import '../../static/css/global.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
