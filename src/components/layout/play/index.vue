<template>
  <div>
    <!--showOpen-->
    <div class="showOpen" :style="{bottom: toggle? 10  + 'vh': 5 + 'vh'}">
      <i :class="elIcon" @click="toggle=!toggle"></i>
    </div>
    <div class="playView" v-show="toggle">
      <!--开始按钮-->
      <div class="item-i">
        <i :class="elPlay" @click="togglePlay"></i>
      </div>
      <!--歌手-->
      <div class="singer">
        <img :class="isPlay ? 'imgBack' : ''" :src="require('@/assets/backPage/pexels-cottonbro-studio-3944091.jpg')">
      </div>
      <!--歌名-->
      <div class="singName">
        {{ "雪什么什么歌" }}
      </div>
      <!--歌手名-->
      <div class="singerName">
        {{ '不知道什么名字得歌手' }}
      </div>
      <!--上一首-->
      <div class="item-l">
        <i :class="'el-icon-d-arrow-left'"></i>
      </div>
      <!--下一首-->
      <div class="item-r">
        <i :class="'el-icon-d-arrow-right'"></i>
      </div>
      <!--喜欢-->
      <div class="item-like">
        <vIcon :name="'xihuan'" :size="1.5"></vIcon>
      </div>
      <!--收藏-->
      <div class="item-discover">
        <i :class="'el-icon-star-off'"></i>
      </div>
      <!--音量-->
      <div class="item-head">
        <i :class="'el-icon-headset'"></i>
      </div>
      <!--歌单-->
      <div class="item-receiving"  @click="menu = !menu">
        <i :class="'el-icon-receiving'"></i>
      </div>

      <!--歌词展示-->
      <div class='has-lyric'>
        <transition-group name="lyric-fade" :style='{position: "relative" ,top:lrcTop}'>
          <!--有歌词-->
          <div v-if='lyricArr.length' key="has-lyric" class="lyric">
            <p v-for='(item, index) in lyricArr' :key='index'>
              {{ item[1] }}
            </p>
          </div>
          <div v-else class='no-lyric' key='no-lyric'>
            <span>暂无歌词</span>
          </div>
        </transition-group>
      </div>
      <!--播放进度-->
      <div class='playing-speed'>
        <!--播放开始时间-->
        <span class="play-begin">{{ songTimes.nowTime }}</span>
        <!--拖拽时间-->
        <div class="play-move" @mousemove="mousemove">
          <!--进度条-->
          <div ref='bg' class='bg' @click='updatemove'>
            <div ref='curProgress' class='cur-progress' :style='{width: curLength+"%"}'></div>
          </div>
          <!--进度条 end -->
          <!--拖动的点点-->
          <div ref='idot' class='idot' :style='{left: curLength +"%"}' @mousedown='mousedown' @mouseup='mouseup'></div>
          <!--拖动的点点 end-->
        </div>
        <!--播放结束时间-->
        <span class="play-end">{{ songTimes.songTime }}</span>
      </div>
    </div>
    <el-dialog class="dialog" :modal="false" :visible.sync="menu" title="歌单">
      <div style="height: 40vh">
        <el-card>
          <span v-for="item in 45" :key="item">
            {{ "嘿嘿嘿" }}
          </span>
        </el-card>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import {formatSeconds, parseLyric} from "@/utils";

export default {
  name: "playView",
  data() {
    return {
      lrcTop: '', // 歌词滑动
      toggle: true,
      menu: false, // 歌单
      elPlay: 'el-icon-video-play',
      elIcon: 'el-icon-arrow-down',
      songTimes: {
        nowTime: '00:00',
        songTime: '00:00',
      },
      curLength: 0, // 进度条的位置
      progressLength: 0, // 进度条长度
      mouseStartX: 0, // 拖拽开始位置
      lyricArr: [], // 当前歌曲的歌词
      lyric: "[00:00.000] 作词 : Capper/罗言\n[00:01.000] 作曲 : Capper/罗言\n[00:03.57]雪 Distance\n[00:04.78]作词 : Capper/罗言\n[00:06.34]作曲 : Capper/罗言\n[00:07.55]编曲 : IOF\n[00:08.54]混音：刘城函\n[00:09.85]母带：张步若 @RSS\n[00:11.21]\n[00:18.63]你说我自以为是\n[00:20.84]可怜像扑火飞蛾\n[00:23.18]任凭无用的勇敢将我淹没\n[00:27.96]这漩涡深不见底\n[00:30.33]蜕去勉强的外壳\n[00:32.83]你充满防备的样子不像我\n[00:36.81]\n[00:37.30]会不会太久\n[00:39.38]久到这结果\n[00:41.55]明明我想要却不敢对你说\n[00:46.92]我好想放手\n[00:49.00]却幻想太多\n[00:51.57]悲叹你不是世上另一个我\n[00:57.24]\n[00:57.57]我愿把胸膛解剖\n[00:59.33]公开脆弱的结构\n[01:01.55]有在跳动的血肉\n[01:03.93]别再只丢我骨头\n[01:06.36]\n[01:09.08]在这么冷的天\n[01:11.21]别离我那么远\n[01:13.90]再靠近我一点\n[01:15.65]\n[01:16.44]可是雪 飘进双眼\n[01:19.23]看不见你皎白的谎言\n[01:21.56]心甘情愿囚禁在深渊\n[01:24.06]舔舐着伤口和刀尖\n[01:26.18]\n[01:26.49]可是雪 飘进双眼\n[01:28.73]看不见你皎白的谎言\n[01:31.35]心甘情愿囚禁在深渊\n[01:33.55]烧一捧雪花做硝烟\n[01:35.67]\n[01:36.03]为什么抿下嘴唇尝起来像铁锈\n[01:39.94]神经的恐慌和不安哪个会先走\n[01:44.75]我怕这沼泽死水就要将我淹没\n[01:49.66]求你能拉住我 就算只有几分钟\n[01:54.08]\n[01:54.59]快要变成玩偶\n[01:56.71]可以随意玩弄\n[01:59.25]别管我感受\n[02:01.71]只要和你联手\n[02:04.22]\n[02:04.56]我愿把胸膛解剖\n[02:06.53]公开脆弱的结构\n[02:08.63]有在跳动的血肉\n[02:11.34]别再只丢我骨头\n[02:13.47]\n[02:15.86]在这么冷的天\n[02:18.67]别离我那么远\n[02:20.94]再靠近我一点\n[02:23.04]\n[02:23.56]可是雪 飘进双眼\n[02:26.25]看不见你皎白的谎言\n[02:28.76]心甘情愿囚禁在深渊\n[02:31.04]舔舐着伤口和刀尖\n[02:33.23]\n[02:33.67]可是雪 飘进双眼\n[02:35.90]看不见你皎白的谎言\n[02:38.38]心甘情愿囚禁在深渊\n[02:40.79]烧一捧雪花做硝烟\n"
    }
  },
  computed: {
    ...mapGetters([
      'isPlay', // 播放状态
      'curTime', // 当前音乐的播放位置
      'duration', // 音乐时长
    ])
  },

  watch: {
    toggle(val) {
      if (val) {
        this.elIcon = 'el-icon-arrow-down'
      } else {
        this.elIcon = 'el-icon-arrow-up'
      }
    },
    // 切换播放状态的图标
    isPlay(val) {
      if (val) {
        this.elPlay = 'el-icon-video-pause'
      } else {
        this.elPlay = 'el-icon-video-play'
      }
      this.lyricArr = parseLyric(this.lyric)
      console.log(this.lyricArr)
    },
    // 播放时间的开始和结束
    curTime() {
      this.$set(this.songTimes, 'nowTime', formatSeconds(this.curTime))
      this.$set(this.songTimes, 'songTime', formatSeconds(this.duration))
      // 移动进度条
      this.curLength = (this.curTime / this.duration) * 100
      // 处理歌词位置及颜色
      if (this.lyricArr.length !== 0) {
        for (let i = 0; i < this.lyricArr.length; i++) {
          if (this.curTime >= this.lyricArr[i][0]) {
            for (let j = 0; j < this.lyricArr.length; j++) {
              document.querySelectorAll('.has-lyric p')[j].style.color = 'rgba(255,255,255,0.3)'
              document.querySelectorAll('.has-lyric p')[j].style.fontSize = '15px'
            }
            if (i >= 0 && this.lyricArr[i][1] !== '') {
              document.querySelectorAll('.has-lyric p')[i].style.color = 'rgba(149,210,246,0.56)'
              document.querySelectorAll('.has-lyric p')[i].style.fontSize = '25px'
              this.lrcTop = 20 * -i + 'px'
            }
          }
        }
      }
    },
  },
  methods: {
    alert() {
      alert(111)
    },
    // 控制音乐播放 / 暂停
    togglePlay() {
      if (this.isPlay) {
        this.$store.commit('setIsPlay', false)
      } else {
        this.$store.commit('setIsPlay', true)
      }
    },
    // 拖拽开始
    mousedown(e) {
      this.mouseStartX = e.clientX
      this.tag = true
    },
    // 拖拽结束
    mouseup() {
      this.tag = false
    },
    // 拖拽中
    mousemove(e) {
      if (!this.duration) {
        return false
      }
      if (this.tag) {
        let movementX = e.clientX - this.mouseStartX
        let curLength = this.$refs.curProgress.getBoundingClientRect().width
        //  计算出百分比
        this.progressLength = this.$refs.progress.getBoundingClientRect().width
        let newPercent = ((curLength + movementX) / this.progressLength) * 100
        if (newPercent > 100) {
          newPercent = 100
        }
        this.curLength = newPercent
        this.mouseStartX = e.clientX
        //  根据百分比推出对应的播放时间
        this.changeTime(newPercent)
      }
    },
    // 更改歌曲进度
    changeTime(percent) {
      let newCurTime = this.duration * (percent * 0.01)
      this.$store.commit('setChangeTime', newCurTime)
    },
    updatemove(e) {
      if (!this.tag) {
        let curLength = this.$refs.bg.offsetLeft
        this.progressLength = this.$refs.progress.getBoundingClientRect().width
        let newPercent = ((e.clientX - curLength) / this.progressLength) * 100
        if (newPercent < 0) {
          newPercent = 0
        } else if (newPercent > 100) {
          newPercent = 100
        }
        this.curLength = newPercent
        this.changeTime(newPercent)
      }
    },
  },
}
</script>

<style scoped>
@import "index.scss";
</style>
