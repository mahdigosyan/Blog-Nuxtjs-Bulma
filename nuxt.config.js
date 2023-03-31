export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
  
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'وبسایت مهدی قوسیان | آموزش برنامه نویسی',
      htmlAttrs: {
        lang: 'fa'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css' }
      ]
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/eslint-module'
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      // https://go.nuxtjs.dev/content
      '@nuxt/content'
    ],
  
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      baseURL: '/'
    },
  
    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
  }
  