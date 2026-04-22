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

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://youths.cc'
    }
  },

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
      htmlAttrs: { lang: 'zh-CN' },
      titleTemplate: '%s',
      title: '孙笑笑 · Sun Xiaoxiao — Fullstack Engineer & OSS Maker',
      meta: [
        { name: 'description', content: '孙笑笑（Sun Xiaoxiao / likely）— 杭州全栈工程师，开源作者。做 BeeCount 蜜蜂记账、BeeDNS 蜜蜂域名等小而美的产品，10+ 年开发经验。' },
        { name: 'keywords', content: '孙笑笑, Sun Xiaoxiao, likely, TNT-Likely, 全栈工程师, 开源, BeeCount, 蜜蜂记账, BeeDNS, 蜜蜂域名, 独立开发者, 杭州, fullstack, indie developer, open source' },
        { name: 'author', content: '孙笑笑 Sun Xiaoxiao' },
        { name: 'robots', content: 'index,follow' },
        { name: 'theme-color', content: '#f4ead5' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:site_name', content: '孙笑笑 · Sun Xiaoxiao' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'zh_CN' },
        { property: 'og:locale:alternate', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'zh_TW' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/avatar.jpeg' },
        { rel: 'apple-touch-icon', href: '/avatar.jpeg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'dns-prefetch', href: 'https://api.github.com' },
        { rel: 'preconnect', href: 'https://api.github.com', crossorigin: '' }
      ]
    }
  }
})
