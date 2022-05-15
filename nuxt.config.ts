import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [{ src: '/static/js/bootstrap.bundle.min.js' }],
    link: [
      // { rel: "stylesheet", href: "https://awesome-lib.css" },
    ],
  },

  // import scss form assets
  css: ['~/assets/scss/bootstrap.scss'],

  // plugins
  // plugins: [{ src: "~/static/js/bootstrap.bundle.min.js", mode: "client" }],
  typescript: {
    strict: true,
  },

  // server: {
  //   port: 4000,
  //   host: 'localhost',
  // },

  // server api backend by nodejs
  serverMiddleware: [
    {
      path: '/api/v1',
      handler: '~/server/src/server.ts',
    },
  ],
})
