import { defineConfig } from 'vitepress'

import { sidebar } from './config/sidebar'
import { nav } from './config/nav'
import { head } from './config/head'
import { genFeed } from './plugins/genFeed'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Leet Blog",

  description: "Leet' Blog，包含前端常用知识、学习记录笔记、工具分享等",
  head,
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    siteTitle: '',
    outlineTitle: '目录',
    search: {
      provider: 'algolia',
      options: {
        appId: '6PGK9MXEA4',
        apiKey: 'ef97692dcfc55fe881fbf5690234574f',
        indexName: 'leet-blog'
      }
    },
    editLink: {
      pattern: 'https://github.com/skyline523/leetPrograming.com/tree/main/docs/:path',
      text: '在Github上编辑此页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/skyline523' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3.5 3.25a.75.75 0 0 1 .75-.75C14.053 2.5 22 10.447 22 20.25a.75.75 0 0 1-1.5 0C20.5 11.275 13.225 4 4.25 4a.75.75 0 0 1-.75-.75Zm.75 6.25C10.187 9.5 15 14.313 15 20.25a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 4.25 11a.75.75 0 0 1 0-1.5ZM3.5 19a2 2 0 1 1 3.999-.001A2 2 0 0 1 3.5 19Z"/></svg>',
        },
        link: '/feed.xml',
      }
    ],
    footer: {
      message: '转载请标注本站原文地址',
      copyright: 'Copyright © 2023-present Leet'
    }
  },
  ignoreDeadLinks: true,
  async buildEnd(siteConfig) {
    await genFeed(siteConfig)
  }
})
