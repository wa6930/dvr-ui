import Vue from 'vue';
import ElementUI from 'element-ui';
//视频播放器-引入
import 'element-ui/lib/theme-chalk/index.css';
import 'video.js/dist/video-js.css'
//结束引入
import VueVideoPlayer from 'vue-video-player'
import App from './App.vue';
//vuex的全局变量
import store from './store'
//vue router使用
import VueRouter from 'vue-router'
import routers from './router'

Vue.use(ElementUI);


Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

//路由配置
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',//history表示使用html5的history模式
  routes: routers,
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});