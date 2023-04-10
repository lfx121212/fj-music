<template>
  <audio ref="player" @timeupdate="timeupdate"  @ended='ended' controls
         style="display: none" :src="require('@/assets/music/lfx.mp3')" preload="metadata">
    您的浏览器不支持音频播放
  </audio>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "audioView",
  computed: {
    ...mapGetters([
      'isPlay', // 播放状态
    ])
  },
  watch: {
    // 监听播放还是暂停
    isPlay() {
      this.togglePlay()
    },
  },
  methods: {
    // 开始 / 暂停
    togglePlay() {
      const player = this.$refs.player
      this.isPlay ? player.play() : player.pause()
    },
    // 音乐播放时记录音乐的播放位置
    timeupdate () {
      const player = this.$refs.player
      this.$store.commit('setCurTime', player.currentTime)
    },
    // 音乐播放结束时触发
    ended () {
      this.$store.commit('setIsPlay', false)
      this.$store.commit('setCurTime', 0)
      this.$store.commit('setAutoNext', !this.autoNext)
    }
  }
}
</script>

<style scoped>

</style>
