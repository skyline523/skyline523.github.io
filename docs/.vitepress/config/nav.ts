import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: '导航', link: '/nav' },
  {
    text: '分类',
    items: [
      { text: 'VitePress', link: '/vitepress/deploy-to-github', activeMatch: '^/vitepress/' },
      { text: '随笔', link: '/daily/introduce', activeMatch: '^/daily/' },
      { text: '友链', link: '/friend-links', activeMatch: '/friend-links' },
    ]
  },
  { text: '建站日志', link: '/websitelog' }
]