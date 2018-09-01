<template>
    <div class="container">
        <input type="text" >
        <button class="register-button button" @click="registerButton" v-if="false">注册</button>
        <button class=" button" @click="getMarketData">请求</button>
    </div>
</template>

<script>
import qs from "qs";
// import axios from "axios";
import { getData } from '~/plugins/axios.js'
import encrypt from "~/utils/rsa.js";
export default {
    data() {
        return {

        }
    },
    methods: {
        registerButton() {
            //do注册
            // var userName="13087006827";
            // var code="156966";
            // var password=encrypt(123456);
            // var passwordAgain=encrypt(156321);
            // var agreement=true;
            // axios.post("https:www.jexzh.com/api/v2/inner/user/regist",qs.stringify({
            //     userName,code,password,passwordAgain,agreement,
            // })).then(res=>{
            // if(res.data && res.data.data && res.data.code == 0){
            //     console.log(res.data.data);
            // }
            // }).catch(error=>{
            //     console.log(error);
            // })
        },
        getMarketData() {
             getData('api/v2/inner/market/coin/ticker','get','').then( res => {
                console.log(res)
             }), err => {
                console.log(err)
             }
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


