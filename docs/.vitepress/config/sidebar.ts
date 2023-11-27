import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/articles/': [
    {
      text: 'VitePress',
      items: [
        { text: 'VitePress部署到Github', link: '/articles/vitepress/deploy-to-github' },
        { text: '文章目录添加自定义标识', link: '/articles/vitepress/outline-symbol' },
        { text: '文章图片缩放功能', link: '/articles/vitepress/img-zoom' }
      ]
    }
  ],
  '/workflow/': [
    { text: '编程规范', link: '/workflow/programming-standard' },
    {
      text: '项目框架搭建',
      items: [
        { text: 'Vue Admin框架搭建 - 1', link: '/workflow/vue-dashboard-template-1' },
        { text: 'Vue Admin框架搭建 - 2', link: '/workflow/vue-dashboard-template-2' },
      ]
    },
    { text: 'Emojis😄', link: '/workflow/emojis' },

  ],
  '/notes/': [
    {
      text: '踩坑记录',
      items: [
        { text: 'UI库踩坑记录', link: '/notes/pit/ui-library' }
      ]
    },
    { text: '随便聊聊', link: '/notes/introduce' },
    { text: '备忘录和快捷入口', link: '/notes/memo-and-quick-entry' }
  ]
}