module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Safe Passage Training Handbook',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tenderloin Safe Passage Training Handbook' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/safepassage-handbook/safepassage-bootstrap/dist/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/safepassage-handbook/vendor/jqcloud/jqcloud.min.css' }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.2.1.min.js',
        integrity: 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=',
        crossorigin: 'anonymous',
        type: 'text/javascript'
      },
      { src: 'https://use.fontawesome.com/a6ba001ef0.js', type: 'text/javascript' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', type: 'text/javascript' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js', type: 'text/javascript' },
      { src: '/safepassage-handbook/safepassage-bootstrap/dist/js/bootstrap.js', type: 'text/javascript' },
      { src: '/safepassage-handbook/vendor/jqcloud/jqcloud.min.js', type: 'text/javascript' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    base: '/safepassage-handbook/'
  }
}
