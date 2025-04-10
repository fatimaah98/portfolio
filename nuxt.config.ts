// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        {property: 'og:type', content: 'website'}
      ]
    }
  }
})