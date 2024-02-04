import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/articles/': [
    {
      items: [
        { text: 'VitePress 相关', link: '/articles/vitepress' },
        { text: '内存泄漏和垃圾回收', link: '/articles/garbage-collection' },
        { text: '动态表单', link: '/articles/dynamic-form' },
        { text: '移动端路由动画', link: '/articles/h5-page-transition' },
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: '类型验算', link: '/articles/typescript/calculate' },
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
  '/workflow/': [
    {
      text: '项目规范',
      items: [
        { text: '编程规范', link: '/workflow/programming-standard' },
        { text: '规范项目代码', link: '/workflow/code-and-style-standard' },
      ]
    },
    {
      text: '常用工具',
      items: [
        { text: '工具库', link: '/workflow/tool-libraries' },
      ]
    },
    { text: 'Emojis😄', link: '/workflow/emojis' },

  ],
  '/notes/': [
    {
      text: '踩坑记录',
      items: [
        { text: 'UI库踩坑记录', link: '/notes/pit/ui-library' },
        { text: '其他踩坑记录', link: '/notes/pit/others' },
      ]
    },
    { text: '阅读须知', link: '/notes/guide' },
    { text: '建站历程', link: '/notes/site-process' },
    { text: '备忘录', link: '/notes/memo' },
    {
      items: [
        { text: '留言', link: '/notes/comment' }
      ]
    },

  ]
}