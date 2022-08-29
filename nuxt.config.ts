import { defineNuxtConfig } from 'nuxt'
import path from 'path'
// import i18n from './config/i18n.js'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeCompiler: true,
  plugins: [{ src: '@/plugins/VueGridLayout.js', mode: 'client' }],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
    '@nuxtjs/tailwindcss', 
    // '@nuxtjs/i18n',
  ],
  // i18n: {
  //   locales: [
  //     { code: 'en', file: 'en.json' },
  //     { code: 'nl', file: 'nl.json' },
  //   ],
  //   vueI18nLoader: true,
  //   default: 'en',
  //   langDir: '@/locales/',
  //   vueI18n: i18n,
  // },

  build: {
    // postcss: {
      // postcssOptions: require('./postcss.config.js'),
      // postcssOptions: {
      //   plugins: {
      //     tailwindcss: {},
      //     autoprefixer: {},
      //   },
      // },
    // },
  },
  // css: ['@/assets/css/main.css'],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
      },
    },
    optimizeDeps: {
      include: ['tailwind.config.js'],
    },
  },
})
