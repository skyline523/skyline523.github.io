import { defineConfig } from 'vitepress'

import { sidebar } from './config/sidebar'
import { nav } from './config/nav'
import { head } from './config/head'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Leet",
  description: "Leet' Blog，包含前端常用知识、学习记录笔记、工具分享等",
  head,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
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
      { icon: 'github', link: 'https://github.com/skyline523' }
    ],
    footer: {
      message: '转载请标注本站原文地址',
      copyright: 'Copyright © 2023-present Leet'
    }
  }
})
