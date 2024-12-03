// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-auth-utils',
    '@nuxt/ui',
    '@nuxthub/core',
  ],
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light',
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  hub: {
    database: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
