<template>
  <div class="box">
    <div class="heard">
      <el-carousel :interval="4000" type="card" height="20vh">
        <el-carousel-item v-for="item in backPages" :key="item.name">
          <img :src="item.img">
        </el-carousel-item>
      </el-carousel>
      <div class="aggregate-card">
        <div v-for="(item,i) in cards" :key="i" @click="cardsChange(item)">
          <el-card class="card" shadow="hover">
            <div class="outermost">
              <div class="outBack"></div>
              <hr>
            </div>
            <vIcon class="card-icon" :name="item.icon" :size="3"/>
            <span>{{ item.name }}</span>
          </el-card>
        </div>
      </div>
    </div>
    <div class="main">
      <h1>歌手列表</h1>
      <div class="main_singer">
        <div v-for="(itme,i) in 12" :key="i">
          <div class="main_card">

          </div>
        </div>
      </div>
      <h1>歌单列表</h1>
      <div class="main_sheet">
        <div v-for="(itme,i) in 7" :key="i">
          <div class="main_card">

          </div>
        </div>
      </div>
      <h1>独家定制</h1>
      <div class="main_sheet">
        <div v-for="(itme,i) in 7" :key="i">
          <div class="customized">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useBackPage} from "@/components/common/useBackPage";
import {useCards} from "@/components/common/useIcard";

export default {
  name: "discoverView",
  data() {
    return {
      backPages: useBackPage(),
      cards: useCards(),
    }
  },

  methods: {
    cardsChange(item) {
      this.$message('click on item ' + item.name);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
