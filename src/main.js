import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import './registerServiceWorker'

import Routes from './routes'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUi)

Vue.use(VueResource)
Vue.use(VueRouter)
//自定义指令 全局
// Vue.directive('rainbow',{
//     bind(el,binding,vnode){
//       el.style.color = '#' + Math.random().toString(16).slice(2,8)
//     } 
// })
 Vue.directive('theme',{
    bind(el,binding,vnode){
      if(binding.value == 'wide'){
          el.style.maxWidth = '1260px';
      } else if(binding.value == 'narrow'){
          el.style.maxWidth = '800px';
      }
      if(binding.arg == 'column'){
          el.style.background = '#fff';
          //'#a3def8';
          el.style.padding = '20px';
      }
    }
 })
 //自定义过滤器 全局
//  Vue.filter('to-uppercase',function(value){
//    return value.toUpperCase();
//  })
 Vue.filter('snippet',function(value){
   return value.slice(0,100) + '...';
 })
 //创建路由
 const router = new VueRouter({
   routes:Routes,
  
 })
 
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
