import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'vi',
      title: 'CTU Course Guide',
      description: 'Môi trường học tập lý tưởng cho sinh viên IT đại học Cần Thơ',
    },
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite in dev, use webpack in prod
    (isProd ? '@vuepress/webpack' : '@vuepress/vite'),

  themeConfig: {
    logo: '/images/hero.png',

    lang: 'vi',

    repo: 'zenfection1412',

    docsDir: 'docs',

    // theme-level locales config
    locales: {
      '/': {
        // navbar
        navbar: navbar.vi,

        // sidebar
        sidebar: sidebar.vi,

        // page meta
        //editLinkText: 'Edit this page on GitHub',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

  plugins: [
    //['@vuepress/plugin-debug'],
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: '3d0553bacdaf2637f689e9c6d1537f9b',
        indexName: 'vuepress',
        searchParameters: {
          facetFilters: ['tags:v2'],
        },
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        // we have multiple deployments, which would use different id
        id: process.env.DOCS_GA_ID,
      },
    ],
    ['@vuepress/plugin-pwa'],
    ['@vuepress/plugin-pwa-popup',],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    // only enable shiki plugin in production mode
    // [
    //   '@vuepress/plugin-shiki',
    //   isProd
    //     ? {
    //         theme: 'dark-plus',
    //       }
    //     : false,
    // ],
    ['@vuepress/plugin-medium-zoom'],
    ['@vuepress/plugin-back-to-top'],
  ],
})
