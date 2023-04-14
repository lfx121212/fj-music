<template>
  <div class="body">
    <div ref="vantageRef" style="width:100%;height:100vh" />
    <el-container class="container-box">
      <el-container>
        <el-aside>
          <aside-view />
        </el-aside>
      </el-container>
      <el-container>
        <el-header>
          <header-view />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <footer-view />
        </el-footer>
      </el-container>
    </el-container>
    <audio-view />
    <play-view />
  </div>
</template>

<script>
import * as THREE from 'three'
import WAVES  from 'vanta/src/vanta.waves'
import AsideView from "@/components/layout/aside";
import FooterView from "@/components/layout/footer";
import HeaderView from "@/components/layout/header";
import PlayView from "@/components/layout/play";
import AudioView from "@/components/layout/audio";

export default {
  name: "RootView",
  components: {AudioView, PlayView, HeaderView, FooterView, AsideView},
  mounted() {
    // 引用组件 设置参数
    this.vantaEffect = WAVES({
      el: this.$refs.vantageRef,
      THREE : THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xc1c38,
      shininess: 17.00,
      waveHeight: 29.50,
      waveSpeed: 1.60,
      zoom: 1.13
      })
  },
  beforeDestroy() {
    // 页面加载前销毁组件
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/root/index.scss";
</style>
