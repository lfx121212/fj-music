<template>
  <div>
    <div class="title">
      <img :src="require('@/assets/icon/logo.svg')" style="width: 3vw">
      <h1>Mfj音乐播放器</h1>
    </div>
    <div class="asideTop" v-for="(item,i) in menus" :key="i">
      {{ item.name }}
      <span v-if="item.key">
        <i @click="chargeUpDown" :class="upShow === true ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"/>
        <i @click="addEstablish" class="el-icon-plus"></i>
        <div v-show="!upShow" class="asideBottom" v-for="menu in item.menus" :key="menu.key">
        <vIcon :name="menu.icon"/>
        <router-link :to="menu.key">{{ menu.name }}</router-link>
      </div>
      </span>
      <div v-else class="asideBottom" v-for="menu in item.menus" :key="menu.key">
        <vIcon :name="menu.icon"/>
        <router-link :to="menu.key">{{ menu.name }}</router-link>
      </div>
    </div>
    <el-dialog :visible.sync="flag" :modal="false">
      <h1>新建歌单</h1>
    </el-dialog>
  </div>
</template>

<script>
import {useMenus} from "@/components/common/useMenus";

export default {
  name: "asideView",
  data() {
    return {
      menus: useMenus(),
      upShow: false,
      flag: false
    }
  },
  mounted() {
    this.$router.push({name: 'discover'}, () => {})
  },
  methods: {
    /**
     * 改变下拉状态
     */
    chargeUpDown() {
      if (this.upShow === false) {
        this.upShow = true;
      } else {
        this.upShow = false;
      }
    },
    addEstablish() {
      this.flag = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
