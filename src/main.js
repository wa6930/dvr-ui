import Vue from 'vue';
import ElementUI from 'element-ui';
//视频播放器-引入
import 'element-ui/lib/theme-chalk/index.css';
import 'video.js/dist/video-js.css'
//结束引入
import VueVideoPlayer from 'vue-video-player'
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)