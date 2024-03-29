import { h, watch } from 'vue'
import { inBrowser, EnhanceAppContext, useData } from 'vitepress'
import defaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import { setSymbolStyle, replaceSymbol } from './plugins/symbol'
import LNavLinks from './components/LNavLinks.vue'
import ZoomImg from './components/ZoomImg.vue'
import Layout from './components/Layout.vue'
import './styles/index.scss'

let homePageStyle: HTMLStyleElement | undefined

const theme: Theme = {
  ...defaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}

    // 获取frontmatter
    const { frontmatter } = useData()

    // 添加自定义class
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(Layout, props)
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component('LNavLinks', LNavLinks)
    app.component('ZoomImg', ZoomImg)

    app.provide('DEV', import.meta.env.MODE === 'development')

    if (inBrowser) {

      setSymbolStyle()

      watch(
        () => router.route.data.relativePath,
        () => {
          updateHomePageStyle(location.pathname === '/')
          replaceSymbol()
        },
        { immediate: true }
      )
    }
  },
}

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}


export default theme