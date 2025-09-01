// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        {property: 'og:type', content: 'website'}
      ]
    }
  },
  i18n: {
    defaultLocale: 'en',
    defaultDirection: "ltr",
    locales: [
      {code: 'en', name: 'English', file: 'en.json', dir: 'ltr'},
      {code: 'fa', name: 'Persian', file: 'fa.json', dir: "rtl"},
      {code: 'ar', name: 'Arabic', file: 'ar.json', dir: 'rtl'}
    ],
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    pages: {
      projects: {
        ar: '/مشاريعی',
        fa: '/پروژه-های-من' ,
        en: '/projects'
      },
      contact: {
        ar: '/اتصل-بی',
        fa: '/تماس-بامن',
        en: '/contact-us'
      },
      blogs: {
        ar: '/المدونات',
        en: '/blogs',
        fa: '/بلاگ'
      }
    }
  },
  css: ["~/assets/css/main.css"],

  devServer: {
    port: 3001
  },
})