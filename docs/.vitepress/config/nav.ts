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
          { text: 'Workflow-1', link: '/notes/pit/step-pit-ui-library' }
        ]
      }
    ]
  },
  {
    text: '笔记',
    items: [
      {
        items: [
          { text: 'UI库踩坑记录', link: '/notes/pit/step-pit-ui-library' }
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