<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="content__header">
          <span class="welcome-register--text" v-text="$t('registerText')"></span>
          <span class="switch-email-register" v-text="$t('registrationByEmail')"></span>
        </div>
        <span class="phone--text" v-text="$t('find_pwd_phone')"></span>
        <div class="input-box">
          <div class="input-box__children--left">
            <span v-text="areaCode"></span>
          </div>
          <input type="text" class="input-box__children--right" placeholder="请输入手机号">
        </div>
        <span class="introduce--text" v-text="$t('verificationCode')"></span>
        <div class="input-box">
          <input type="text" class="input" placeholder="请输入验证码">
        </div>
        <span class="introduce--text" v-text="$t('login_password')"></span>
        <div class="input-box">
          <input type="text" class="input" placeholder="6-64位字符">
        </div>
        <span class="introduce--text" v-text="$t('confirm_password')"></span>
        <div class="input-box">
          <input type="text" class="input" placeholder="请输入密码">
        </div>
        <div class="terms-service">
          <div class="color-block"></div>
          <span>我已阅读并同意</span>
          <a href="javascript:;">《网络服务条款》</a>
        </div>
        <div class="register-box">
          <div class="register-button">注册</div>
          <span class="account--text">已有账号？</span>
          <span class="login--text">去登录</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import axios from "axios";
import { api } from '~/plugins/axios2'
import { getData } from '~/plugins/axios.js'
import encrypt from "~/utils/rsa.js";
export default {
  data() {
    return {
      areaCode: "+86",
    }
  },
  methods: {
    async registerButton() {
      let {data} = await api.post("http://test.coinfex.com/api/v2/inner/notice/all", {});
      console.log(data)
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .content {
    width: 27.1%;
    margin-left: 14.1%;
    display: flex;
    flex-direction: column;
    .content__header {
      width: 100%;
      height: 47px;
      margin-top: 89px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      .welcome-register--text {
        font-size: $bigger-font-size;
        color: $color-depth-white;
      }
      .switch-email-register {
        font-size: $default-font-size;
        color: $color-light-blue;
      }
    }
    .phone--text {
      margin: 44px 0 8px 0;
      color: $color-light-black;
      font-size: $smaller-font-size;
    }
    .introduce--text {
      margin: 24px 0 8px 0;
      color: $color-light-black;
      font-size: $smaller-font-size;
    }
    .input-box {
      box-sizing: border-box;
      width: 100%;
      height: 48px;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      background: $color-depth-black;
      .input {
        width: 100%;
        background: $color-depth-black;
        border: none;
        text-indent: 16px;
        outline: none;
      }
      &__children--left {
        box-sizing: border-box;
        width: 18.3%;
        height: 48px;
        border: 1px solid $color-light-gray;
        border-radius: 4px 0 0 4px;
        text-align: center;
        line-height: 46px;
        color: $color-depth-white;
      }
      &__children--right {
        box-sizing: border-box;
        width: 81.7%;
        height: 48px;
        border: none;
        border-right: 1px solid $color-light-gray;
        border-top: 1px solid $color-light-gray;
        border-bottom: 1px solid $color-light-gray;
        border-radius: 0 4px 4px 0;
        background: $color-depth-black;
        outline: none;
        text-indent: 16px;
      }
    }
    .terms-service {
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: flex-start;
      margin: 32px 0 26px 0;
      span {
        color: $color-light-white;
      }
      a {
        color: $color-light-blue;
      }
    }
    .register-box{
      width: 100%;
      height: 48px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .register-button {
        width: 196px;
        height: 48px;
        background: $color-light-blue;
        line-height: 48px;
        text-align: center;
        color: $color-pure-white;
        border-radius: 4px;
      }
      .account--text {
        margin-left: 40px;
        color: $color-light-white;
      }
      .login--text {
        color: $color-light-blue;
      }
    }

  }
}
</style>


