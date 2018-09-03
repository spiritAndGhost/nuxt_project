<template>
<div class="container">
  <header class="header">
    <div class="header__children--left">
      <nuxt-link to="/">
        <img src="~/assets/images/nav_logo.svg" alt="logo" class="logo"/>
      </nuxt-link>
      <ul class="market-list">
        <li><nuxt-link to="/token-trading" v-text="$t('coin_trading')"></nuxt-link></li>
        <li><nuxt-link to="/option-trading" v-text="$t('options_trading')"></nuxt-link></li>
        <li><nuxt-link to="/contract-trading" v-text="$t('contract_trading')"></nuxt-link></li>
        <li><nuxt-link to="/market-info" v-text="$t('market_center')"></nuxt-link></li>
      </ul>
    </div>
    <div class="header__children--right">
      <span class="login" v-text="$t('login_in')"></span>
      <span class="register" v-text="$t('register')"></span>
      <div class="language" @click="openLangList(language)">
        <span v-text="language"></span>
        <img src="~/assets/images/arrow_drop_down-material.svg" alt="allow" class="allow" :class="[langListStatus? 'allow--rotate': '']">
        <ul class="language-list" v-if="langListStatus">
          <li v-for="(lang, index) in languageList" :key="'header_language_'+index" v-text="lang.text" @click.stop="selectLang(lang)"></li>
        </ul>
      </div>
    </div>
  </header>
</div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      language: "简体中文",
      langList: [
        {text: "简体中文", lang: "zh"},
        {text: "English", lang: "en"},
      ],
      languageList: [],
      langListStatus: false,
    }
  },
  methods: {
    ...mapMutations({
      SET_LANG: "SET_LANG",
    }),
    // 展示/关闭语言列表
    openLangList(lang) {
      this.languageList = this.langList.filter(
        lg => lg.text !== lang
      )
      this.langListStatus = !this.langListStatus;
    },
    // 改变多语言配置
    selectLang(lang) {
      this.SET_LANG(lang.lang);
      this.$i18n.locale = lang.lang;
      this.language = lang.text;
      this.langListStatus = false;
    },
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: $default-font-size;
  color: $color-pure-white;
  .header__children--left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .logo {
      margin: 0 2px 0 25px;
    }
    .market-list {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      li {
        margin-left: 32px;
        a {
          color: $color-pure-white;
        }
      }
    }
  }
  .header__children--right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    .login {
      margin-right: 32px;
      cursor: pointer;
    }
    .register {
      margin-right: 21px;
      cursor: pointer;
    }
    .language {
      box-sizing: border-box;
      margin-right: 24px;
      width: 90px;
      height: 30px;
      border: 1px solid $color-lighter-gray;
      border-radius: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      .allow {
        margin-left: 4px;
      }
      .allow--rotate {
        transform: rotate(180deg);
      }
      .language-list {
        width: 90px;
        background: #32343E;
        box-shadow: 0 2px 4px 0 rgba(31,33,37,0.50);
        border-radius: 4px;
        position: absolute;
        top: 34px;
        left: 0;
        li {
          width: 90px;
          height: 39px;
          display: block;
          text-align: center;
          line-height: 39px;
        }
        .active {
          background: $color-depth-gray;
          color: $color-light-blue;
        }
      }
    }
  }
}

</style>


