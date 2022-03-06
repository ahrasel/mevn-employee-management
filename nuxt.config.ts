import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    script: [{ src: "/static/js/bootstrap.bundle.min.js" }],
    link: [
      // { rel: "stylesheet", href: "https://awesome-lib.css" },
    ],
    // please note that this is an area that is likely to change
    // style: [
    //   { children: ":root { color: red }", type: "text/css" },
    // ],
  },

  // import scss form assets
  css: ["~/assets/scss/bootstrap.scss"],

  // plugins
  // plugins: [{ src: "~/static/js/bootstrap.bundle.min.js", mode: "client" }],
  typescript: {
    strict: true,
  },
});
