// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: true,

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ],

  // i18n configuration
  i18n: {
    bundle: {
      optimizeTranslationDirective: false
    },
    compilation: {
      strictMessage: false,
      escapeHtml: false
    },
    restructureDir: 'app/i18n',
    langDir: 'locales/',
    locales: [
      {
        code: 'zh-CN',
        language: 'zh-CN',
        name: '简体中文',
        files: ['zh-CN.json']
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        files: ['en.json']
      },
      {
        code: 'zh-TW',
        language: 'zh-TW',
        name: '繁體中文',
        files: ['zh-TW.json']
      }
    ],
    defaultLocale: 'zh-CN',
    strategy: 'no_prefix',
    lazy: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // Color mode configuration
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },

  css: ['~/assets/css/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '孙笑笑 - 个人网站',
      meta: [
        { name: 'description', content: '孙笑笑的个人网站' }
      ]
    }
  }
})
