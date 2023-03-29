<template>
  <div>
    <div class="container">
      <div class="container-forms">
        <div class="container-info">
          <div class="info-item">
            <div class="table">
              <div class="table-cell login" v-show="flag">
                <p>已经有账号了？ </p>
                <div class="btn" @click.stop="flag = false" id="login">登录</div>
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="table">
              <div class="table-cell register" v-show="!flag">
                <p>还没有账号？ </p>
                <div class="btn" @click="flag = true" id="register">注册</div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-form">
          <div class="form-item log-in">
            <div class="table">
              <div class="table-cell">
                <el-form ref="loginForm">
                  <h1 class="title">登录</h1>
                  <el-input placeholder="用户名/邮箱/电话" v-model="loginData.user" type="text" clearable/>
                  <el-input placeholder="密码" v-model="loginData.password" :type="Type" clearable/>
                  <img class="item-icon icon-data" src="../assets/img/openEye.svg" @click="chargeIcon(true)"
                       v-if="icon"/>
                  <img class="item-icon icon-data" src="../assets/img/closeEye.svg" @click="chargeIcon(false)" v-else/>
                  <div class="btn" @click.stop="loginForm">登录</div>
                </el-form>
              </div>
            </div>
          </div>
          <div class="form-item sign-up">
            <div class="table">
              <div class="table-cell">
                <el-form ref="registerForm">
                  <h1 class="title">注册</h1>
                  <el-input placeholder="邮箱" v-model="registerData.email" type="text" clearable/>
                  <el-input placeholder="电话" v-model="registerData.phone" type="text" clearable/>
                  <el-input placeholder="用户名" v-model="registerData.username" type="text" clearable/>
                  <el-input placeholder="密码" v-model="registerData.password" :type="Type" clearable/>
                  <img class="item-icon " src="../assets/img/openEye.svg" @click="chargeIcon(true)" v-if="icon"/>
                  <img class="item-icon " src="../assets/img/closeEye.svg" @click="chargeIcon(false)" v-else/>
                  <div class="btn">注册</div>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
        <source src="@/assets/mp4/music.mp4" type="video/mp4"/>
      </video>
    </div>
  </div>
</template>

<script>

import {login} from "@/api/login";

export default {
  name: "loginView",
  data() {
    return {
      flag: false,
      icon: false,
      Type: 'password',
      registerData: {},
      loginData: {}
    }
  },
  mounted() {
    $(".info-item .btn").click(function () {
      $(".container").toggleClass("log-in")
    });
  },
  methods: {
    /**
     * 更改显示属性
     * @param d
     */
    chargeIcon(d) {
      debugger
      if (d === false) {
        this.Type = 'text';
        this.icon = true;
      } else {
        this.Type = 'password';
        this.icon = false;
      }
    },

    /**
     * 登录
     */
    loginForm() {
      login({'user' : this.loginData.user, 'password' : this.loginData.password}).then(res => {
        if (res.code === 200) {
          // 路由跳转
          this.$router.push({ path: '/index' })
        }
      })
    },
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/login/login.scss";
</style>
