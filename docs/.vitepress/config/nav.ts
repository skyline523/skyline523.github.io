import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: '导航', link: '/nav' },
  {
    text: '文章',
    items: [
      { text: 'VitePress', link: '/articles/vitepress' },
      { text: '内存泄漏和垃圾回收', link: '/articles/garbage-collection' },
      {
        items: [
          { text: 'TypeScript 类型验算', link: '/articles/typescript/calculate' },
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: '模块化', link: '/articles/engineering/module' },
          { text: '包管理器', link: '/articles/engineering/package-manager' },
        ]
      },
    ],
  },
  {
    text: 'Workflow',
    items: [
      {
        items: [
          { text: '编程规范', link: '/workflow/programming-standard' },
          { text: '规范项目代码', link: '/workflow/code-and-style-standard' },
        ]
      },
      {
        items: [
          { text: '常用工具', link: '/workflow/tool-libraries' },
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
          { text: 'Vue 文档笔记', link: '/notes/vue/index' }
        ]
      },
      {
        items: [
          { text: 'UI库踩坑记录', link: '/notes/pit/ui-library' },
          { text: '其他踩坑记录', link: '/notes/pit/others' },
        ]
      }
    ]
  },
  {
    text: '快捷入口',
    items: [
      {
        items: [
          { text: '备忘录', link: '/notes/memo' },
          { text: '留言', link: '/notes/comment' },
          { text: '日志', link: '/websitelog' },
        ]
      }
    ]
  },
  { text: '友链', link: '/friend-links' }
]