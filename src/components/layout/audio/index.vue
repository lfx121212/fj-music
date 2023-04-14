<template>
  <audio ref="player" @timeupdate="timeupdate"  @canplay='canplay' @ended='ended' controls
         style="display: none" :src="require('@/assets/music/lfx.mp3')">
  </audio>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "audioView",
  computed: {
    ...mapGetters([
      'songUrl', // 音乐链接
      'isPlay', // 播放状态
      'volume', // 音量
      'changeTime', // 指定播放时刻
    ])
  },
  watch: {
    // 监听播放还是暂停
    isPlay() {
      this.togglePlay()
    },
    // 跳到指定时刻播放
    changeTime () {
      let player = this.$refs.player
      player.currentTime = this.changeTime
    },
  },
  methods: {
    // 开始 / 暂停
    togglePlay () {
      const player = this.$refs.player
      this.isPlay ? player.play() : player.pause()
    },
    // 获取歌曲链接后准备播放
    canplay () {
      const player = this.$refs.player
      //  记录音乐时长
      this.$store.commit('setDuration', player.duration)
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
    }
  }
}
</script>

<style scoped>

</style>
