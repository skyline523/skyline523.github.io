import { DefaultTheme } from 'vitepress'

const dailySidebar = [
  {
    text: '随笔',
    items: [
      { text: '随便聊聊', link: '/daily/introduce' },
      { text: 'Emojis', link: '/daily/emojis' },
    ]
  },
  {
    text: '草稿箱',
    items: [
      { text: '示例文章-1', link: '' }
    ]
  },
  { text: '备忘录和快捷入口', link: '/daily/memo-and-quick-entry' }
]

const vitepressSidebar = [
  {
    text: 'VitePress',
    items: [
      { text: 'VitePress部署到Github', link: '/vitepress/deploy-to-github' },
      { text: '文章目录添加自定义标识', link: '/vitepress/outline-symbol' },
      { text: '文章图片缩放功能', link: '/vitepress/img-zoom' }
    ]
  }
]

export const sidebar: DefaultTheme.Sidebar = {
  '/daily/': dailySidebar,
  '/vitepress/': vitepressSidebar
}