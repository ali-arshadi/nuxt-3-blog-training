// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/fonts'],
  nitro: {
    devProxy: {
      '/api': 'http://localhost:5000/api',
    },
  },
  routeRules: {
    '/api/**': { proxy: 'http://localhost:5000/api/**' },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/colors.scss" as *;',
        },
      },
    },
  },
});
