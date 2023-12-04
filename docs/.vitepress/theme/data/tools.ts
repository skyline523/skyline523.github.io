import type { NavData } from '../type'

export const tools: NavData[] = [
  {
    title: '工具',
    items: [
      {
        title: 'Lodash',
        desc: 'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库',
        link: 'https://www.lodashjs.com/'
      }
    ]
  },
  {
    title: '时间',
    items: [
      {
        title: 'FullCalendar',
        desc: 'The Most Popular JavaScript Calendar',
        link: 'https://fullcalendar.io/'
      },
      {
        title: 'day.js',
        desc: 'Moment.js 的 2kB 轻量化方案，拥有同样强大的 API',
        link: 'https://day.js.org/zh-CN/'
      },
      {
        title: 'moment.js',
        desc: '解析、验证、操作、并在 JavaScript 中显示日期和时间',
        link: 'https://momentjs.com/'
      },
    ]
  },
]