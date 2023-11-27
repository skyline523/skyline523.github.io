import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: '导航', link: '/nav' },
  {
    text: '文章',
    items: [
      { text: 'VitePress', link: '/articles/vitepress/deploy-to-github' },
    ],
  },
  {
    text: 'Workflow',
    items: [
      {
        items: [
          { text: '编程规范', link: '/workflow/programming-standard' },
        ]
      },
      {
        text: '项目框架搭建',
        items: [
          { text: 'Vue Admin框架搭建 - 1', link: '/workflow/vue-dashboard-template-1' },
          { text: 'Vue Admin框架搭建 - 2', link: '/workflow/vue-dashboard-template-2' },
        ]
      },
      {
        items: [
          { text: 'Emojis', link: '/workflow/emojis' },
        ]
      }
    ]
  },
  {
    text: '笔记',
    items: [
      {
        items: [
          { text: 'UI库踩坑记录', link: '/notes/pit/ui-library' }
        ]
      },
      {
        items: [
          { text: '随笔', link: '/notes/memo-and-quick-entry' }
        ]
      }
    ]
  },
  { text: '建站日志', link: '/websitelog' },
  { text: '友链', link: '/friend-links' }
]