<template>
  <div class="playView" v-show="toggle">
    <div class="item-i">
      <i :class="elPlay" @click="togglePlay"></i>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "playView",
  data() {
    return {
      toggle: true,
      elPlay: 'el-icon-video-play'
    }
  },
  computed: {
    ...mapGetters([
      'isPlay', // 播放状态
    ])
  },
  watch: {
    // 切换播放状态的图标
    isPlay(val) {
      if (val) {
        this.elPlay = 'el-icon-video-pause'
      } else {
        this.elPlay = 'el-icon-video-play'
      }
    },
  },
  methods: {
    // 控制音乐播放 / 暂停
    togglePlay () {
      if (this.isPlay) {
        this.$store.commit('setIsPlay', false)
      } else {
        this.$store.commit('setIsPlay', true)
      }
    }
  },
}
</script>

<style scoped>
@import "index.scss";
</style>
