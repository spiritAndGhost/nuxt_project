module.exports = {
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      // 页面渲染之后滚动到顶部
      return { x: 0, y: 0 }
    }
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    // middleware: 'user-agent'
    //添加一个自定义的路由配置：
    // extendRoutes (routes) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
  },

  // loading: {
  //   color: "red",
  //   height: "50px"
  // },
  loading: '~/components/loading.vue',

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
  css: ["~/assets/styles/css/main.css"],
  // loading: { color: "#3B8070" },
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
