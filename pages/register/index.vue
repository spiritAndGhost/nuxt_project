<template>
    <div class="container">
        <input type="text" >
        <button class="register-button button" @click="registerButton" v-if="true">注册</button>
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

    }
  },
  methods: {
    async registerButton() {
      let {data} = await api.post("https://www.jexzh.com/api/v2/inner/user/findPassword/resetPassword", {
        userName: "130870006827",
        newPassword: "123456",
        confirmPassword: "123456",
        uuid: "16358e5a-fb9f-449e-bc7b-5a660ce0b59c",
      })
      console.log(data)
    }
  },
}
</script>

<style scoped>
.register-button, .button {
    width: 200px;
    height: 40px;
    background: #00c1de;
    border-radius: 2px;
    border: none;
}
</style>


