import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  base: '/yuleweici/',
  title: 'Yule-Vue',
  description: 'Just For Fun',
  head: [
    ['link', { rel: 'icon', href: '/favico2.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo3.png',
    author: 'will',
    authorAvatar: '/avatar.jpg',
    docsRepo: 'https://github.com/vwin/yuleweici',
    docsBranch: 'gh-pages',
    docsDir: 'vuepressBlog',
    lastUpdatedText: '',
    autoAddCategoryToNavbar: true,
    // series 为原 sidebar
    series: {
      // '/docs/theme-reco/': [
      //   {
      //     text: 'module one',
      //     children: ['home', 'theme']
      //   },
      //   {
      //     text: 'module two',
      //     children: ['api', 'plugin']
      //   }
      // ],
      '/docs/test': [
        {
          text: '自动化测试',
          children: ['api-test', 'perf-test']
        }
      ],
      '/docs/devops':[
        {
          text: 'Devops',
          children: ['devops-intro']
        }
      ],
    },
    navbar:
    [
      // { text: 'Home', link: '/' },
      // { text: 'Categories', link: '/categories/reco/1/' },
      // { text: 'Tags', link: '/tags/tag1/1/' },
      { text: 'Docs',
        children: [
          // { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          // { text: 'vuepress-theme-reco', link: '/blogs/other/guide' },
          { text: '测试开发', link: '/docs/test/api-test' },
          { text: 'Devops', link: '/docs/devops/devops-intro' },
        ]
      },
      {
        text: 'Contact',
        children: [
          { text: 'GitHub', link: 'https://github.com/vwin' },
        ]
      },
      { text: 'About', link: '/views/personal' },

    ],
    bulletin: {},
  }),
  // debug: true,
  lang: 'zh-CN',
})
