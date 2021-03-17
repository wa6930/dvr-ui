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
                  v-model="input"
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
                     icon="el-icon-search"
                     @click="search(input,select)"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-col :span="12"
            :offset="6"
            :justify="bottom">
      <div class="grid-content bg-purple">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="mvTotal"></el-pagination>
      </div>
    </el-col>

  </div>
</template>

<script>
//引入vuex对应的全局变量
import store from '../src/store/index'


export default {
  name: 'App',
  components: {

  },
  //添加视频播放器
  data () {
    return {
      input: '',
      activeIndex: '1',
      select: '1',
      bottom: '1',
      mvTotal: 100,

    }
  },

  computed: {

  },
  methods: {
    /**
     * @description: 功能选择
     * @param {*} key 当前标签页
     * @param {*} keyPath 跟标签页
     * @return {*}
     */
    handleSelect (key, keyPath) {
      console.log("当前的页面号为 key = " + key + "，keypath = " + keyPath + ",默认数值：activeIndex = " + this.activeIndex)
      console.log("全局变量测试:" + store.state.count)
    },

    /**
     * @description: 实现搜索功能
     * @param {str} str 搜索的内容
     * @param {int} value 当前搜索类型，1为视频名
     * @return null
     */
    search (str, value) {
      if (str == '') {
        this.message("请在搜索框输入内容后再搜索", 3)
        this.message()
      } else {
        //TODO:实现搜索功能
        console.log('str:' + str + '，value:' + value)
      }
    },

    /**
     * @description: 消息弹窗
     * @param {string} str 弹出消息的内容
     * @param {int} type 类型：1:成功,2:警告,3:错误
     * @return null
     */
    message (str, type) {
      switch (type) {
        case 1:
          this.$message({
            message: str,
            type: 'success'
          });
          break;
        case 2:
          this.$message({
            message: str,
            type: 'warning'
          });
          break;
        case 3:
          this.$message.error(str);
          break;
      }

    }
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
