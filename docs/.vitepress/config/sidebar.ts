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
    {
      text: '项目规范',
      items: [
        { text: '编程规范', link: '/workflow/programming-standard' },
        { text: '规范项目代码', link: '/workflow/code-and-style-standard' },
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