<template>
  <div class="container">
    <h1>Home page</h1>
    <p><nuxt-link to="/users">Lists of users</nuxt-link></p>
    <p><nuxt-link to="/register">注册页面</nuxt-link></p>
    <p><button @click="showLoginError">Notif me!</button></p>
  </div>
</template>
<script>
let miniToastr

if (process.browser) {
  miniToastr = require('mini-toastr')
}
console.log(miniToastr);
export default {
  mounted() {
    // miniToastr.init()
  },
  notifications: {
    showLoginError: {
      title: 'Welcome!',
      message: 'Hello from nuxt.js',
      type: 'info'
    }
  }
}
</script>

<style>
.container {
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
}
</style>
