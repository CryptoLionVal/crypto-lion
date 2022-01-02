export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
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

  router: {
    linkExactActiveClass: 'font-bold',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.css'],
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

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/chain.js',
    {
      src: '@/plugins/gtag.js',
      mode: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/axios'],

  // i18n https://i18n.nuxtjs.org
  i18n: {
    seo: true,
    locales: [
      {
        name: 'Turkish',
        code: 'tr',
        iso: 'tr',
        file: 'tr.js',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en',
        file: 'en.js',
      },
    ],
    lazy: true,
    defaultLocale: 'tr',
    langDir: 'languages/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  sitemap: {
    hostname: 'https://cryptolion.finance',
    gzip: true,
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
