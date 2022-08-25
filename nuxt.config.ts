import { defineNuxtConfig } from 'nuxt'
import path from 'path'

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
  ],
  build: {
    postcss: {
      // postcssOptions: require('./postcss.config.js'),
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ['@/assets/css/main.css'],
  vite: {
    resolve: {
      alias: {
        'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
      },
    },
    optimizeDeps: {
      include: ['tailwind.config.js'],
    },
  },
})
