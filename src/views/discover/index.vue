<template>
  <div>
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
      cards: useCards()
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
