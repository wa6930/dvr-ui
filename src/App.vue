<template>
  <div style="margin-top: 15px;">

    <img src="../src/assets/bilibili-backTop.jpg" />
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1">视频搜索</el-menu-item>
      <el-menu-item index="2">上传视频</el-menu-item>

    </el-menu>
    <el-col :span="12"
            :offset="6">
      <h1>视频搜索界面</h1>
    </el-col>
    <el-row :gutter="20">
      <el-col :span="12"
              :offset="6">
        <el-input placeholder="请输入内容"
                  v-model="input3"
                  class="input-with-select">
          <el-select v-model="select"
                     slot="prepend"
                     placeholder="请选择搜索类型">
            <el-option label="视频名"
                       value="1"></el-option>
            <el-option label="视频id"
                       value="2"></el-option>
          </el-select>
          <el-button slot="append"
                     icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20"
            :offset="3"
            :justify="bottom">
      <el-col :span="12"
              :offset="8"
              :justify="bottom">
        <div class="grid-content bg-purple">
          <el-pagination background
                         layout="prev, pager, next"
                         :total="1000"></el-pagination>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  //添加视频播放器
  data () {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: 'zn-ch',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: "/static/images/author.jpg",
      }
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
