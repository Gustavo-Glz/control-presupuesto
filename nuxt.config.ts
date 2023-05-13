// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/normalize.css", "@/assets/css/global.css"],
  app: {
    head: {
      title: "Control de gastos",
      charset: "utf-8",
      htmlAttrs: {
        lang: "es",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap",
        },
      ],
    },
  },
});
