module.exports = {
  // loading: {
  //   color: "red",
  //   height: "50px"
  // },
  loading: "~/components/loading.vue",

  /*
  ** Headers of the page
  */
  head: {
    title: "nuxt_project",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "learn nuxt" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  modules: [
    'nuxt-sass-resources-loader'
  ],
  sassResources: [
    '@/assets/styles/sass/_variables.scss',
    "@/assets/styles/sass/_base.scss",
    "@/assets/styles/sass/_mixins.scss",
  ],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      // 页面渲染之后滚动到顶部
      return { x: 0, y: 0 }
    },
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  css: ["@/assets/styles/sass/main.scss"],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
