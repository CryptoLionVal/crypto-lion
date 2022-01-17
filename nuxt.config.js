export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // MAINNET or TESTNET
  env: {
    CHAIN: process.env.NODE_ENV === 'production' ? 'MAINNET' : 'TESTNET',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'leading-normal tracking-normal text-white gradient source-sans',
    },
  },

  // CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Tailwind
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'theme-primary': '#010b18',
            'theme-secondary': '#043970',
          },
          backgroundImage: {
            'dot-pattern': "url(' /bg.png')",
          },
        },
      },
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/chain.ts',
    {
      src: '@/plugins/gtag.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  i18n: {
    seo: true,
    locales: [
      {
        name: 'Turkish',
        code: 'tr',
        iso: 'tr',
        file: 'tr.ts',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en',
        file: 'en.ts',
      },
    ],
    lazy: true,
    defaultLocale: 'tr',
    langDir: 'languages/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  sitemap: {
    hostname: 'https://cryptolion.finance',
    gzip: true,
  },
}
