---
outline: deep
date: 2024-01-08
---

# VitePress

本站使用的是`VitePress`搭建的静态博客，本站会记录建站以来本站与`VitePress`相关的配置，踩坑等等。

## 部署到 Github Pages

### 创建 VitePress 项目

先进入[VitePress 官网](https://vitepress.dev/guide/getting-started)按照文档的 Getting Started 步骤创建一个新项目

### 部署 Github Pages

#### 创建仓库

需要创建两个仓库：

1. 你的项目的源代码仓库(仓库名随便取)
2. 你的项目打包后`docs:build`后的 dist 文件夹内容(这个仓库名需按照`[github username].github.io`这个格式)

#### 配置仓库选项

- 打开仓库设置

<ZoomImg src='/assets/articles/vitepress/github-repo.png' desc='仓库设置' />

- 一般使用默认设置即可，可能分支需要切换，以及如果自己有域名可以填上。

<ZoomImg src='/assets/articles/vitepress/repo-setting.png' desc='仓库设置' />

正常情况下等待几分钟，就部署好了。[skyline523.github.io/](https://skyline523.github.io/)

### 记录

刚刚照着[别人的文章](https://juejin.cn/post/7139818261704605733)按步骤部署就踩进一个坑了...

就是`docs:build`后的 dist 文件夹，我把整个文件夹给推到仓库了，应该是把 dist 里面的所有内容放到仓库，dist 文件夹要除外，只需要里面的内容。

## 文章目录添加自定义标识

你可以看到文章右侧目录应该有些有标识，这个是怎么做的？

我在看一篇 Vue3 的教程时看到了这个教程是用 VitePress 做的，而且它的目录有部分有自定义的标识。标识可以让我们编写以前的文章时，为某部分添加标识以识别这部分内容是不是新加的。

有幸的是这个作者的这个网站源代码是开源的，我查阅之后知道了怎么实现这个功能。

### 扩展 theme

项目的 theme 是默认的，而且配置是在`config.ts`中。我们需要在`/.vitepress`下新建`theme`目录，然后新建`index.ts`。

之后我们创建用户给目录添加标识的自定义插件，`theme`文件夹下新建`plugins`文件夹，再新建`symblo.ts`。目录结构应该为以下：

```
└─.vitepress
   └─theme
      ├─plugins
      |   └─symbol.ts
      └─index.ts
```

### symbol.ts

这个效果如何实现？是通过在.md 文件上的标题旁通过写上自定义的文字，然后通过页面加载完成后获取文章上的各个标题来判断哪些标题是否有对应标识文字。然后获取文字目录，找到对应标题的目录，进行添加标识。

首先我们定义需要自定义的文字，以及对应的标识

```ts
interface Config {
  new: string
}

/**
 * 通过在标题旁写上 ~new来确定
 * eg: ## 二级标题 ~new
 */
const markConfig: Config = {
  new: ' ~new'
}

// 标识
const iconConfig: Config = {
  new: '<i class="sidebar__icon--default sidebar__icon--new"></i>'
}
```

设置好后，因为我这里的标识需要设置样式，所以需要设置样式，并在页面加载后动态加载设置的样式。

```ts
/**
 * 设置图标样式
 * 
 * 添加其他关键字的样式 ~hot
 * .sidebar__icon--hot {
      background-color: #da5961;
    }
    .sidebar__icon--hot:before {
      content: "H";
      background-color: #da5961;
    }
 */
export function setSymbolStyle() {
  if (!inBrowser) return
  try {
    const CSS = `
    .sidebar__icon--default {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;
      color: #fff;
      font-size: 13px;
      font-weight: bold;
      font-style: normal;
      vertical-align: middle;
      margin: 0 5px;
      transform: scale(0.7) rotate(30deg);
    }
    .sidebar__icon--default:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      transform: rotate(135deg);
    }
    .sidebar__icon--new {
      background-color: #3eaf7c;
    }
    .sidebar__icon--new:before {
      content: "N";
      background-color: #3eaf7c;
    }
    `

    loadRes({
      type: 'style',
      id: 'symbol-plugin',
      resource: CSS
    }).catch((e) => {
      console.log(e)
    })
  } catch (e) {
    console.log(e)
  }
}
```

`inBrowser`是 VitePress 暴露的一个布尔变量，我查询源码发现这个变量是判断 document 是否完成加载。

[来自于链接中代码第 22 行](https://github.com/vuejs/vitepress/blob/main/src/shared/shared.ts)

```ts
export const inBrowser = typeof document !== 'undefined'
```

`loadRes()`是需要安装插件`pnpm install @bassist/utils`，用处是动态加载资源，这里是动态加载样式。除了用工具也可以用 js 实现动态加载样式。

也可选择不使用插件，通过 js 实现：

```ts
/**
 *  加载style
 */
function loadStyleString(css: string) {
  var style = document.createElement('style')
  style.type = 'text/css'
  try {
    style.appendChild(document.createTextNode(css))
  } catch (ex) {
    style.textContent = css
  }
  var head = document.getElementsByTagName('head')[0]
  head.appendChild(style)
}

// 把setSymbolStyle()中loadRes()改成
loadStyleString(CSS)
```

最后要写的是执行标记替换，查找到对应标题是否含有 ~new 执行目录添加上面设置的标识

```ts
import { inBrowser } from 'vitepress'
import { loadRes } from '@bassist/utils'

/**
 * 执行标记替换
 */
export function replaceSymbol() {
  if (!inBrowser) return
  setTimeout(() => {
    try {
      // 获取 DOM
      const sidebarLinks =
        document.querySelectorAll('.aside-container nav .outline-link') || []
      const h2s = document.querySelectorAll('.content-container h2') || []
      const h3s = document.querySelectorAll('.content-container h3') || []
      const h4s = document.querySelectorAll('.content-container h4') || []
      const doms = [...sidebarLinks, ...h2s, ...h3s, ...h4s]

      // 替换标记成图标
      doms.forEach((item) => {
        let html = item.innerHTML

        for (const key in markConfig) {
          if (Object.hasOwnProperty.call(markConfig, key)) {
            const k = key as keyof Config
            const mark = markConfig[k]
            const icon = iconConfig[k]
            const reg = new RegExp(mark, 'img')

            // 只处理包含标记的元素
            if (html.includes(mark)) {
              // 部分元素不显示图标
              const { nodeName } = item
              switch (nodeName) {
                case 'H2':
                case 'H3':
                case 'H4':
                  html = html.replace(reg, '')
                  break
                default:
                  html = html.replace(reg, icon)
              }

              // 渲染
              item.innerHTML = html
            }
          }
        }
      })
    } catch (e) {
      console.log(e)
    }
  }, 100)
}
```

`sidebarLinks`是目录的每项，`h2s, h3s, h4s`是对应的二三四级标题，VitePress 的目录是不显示一级标题的。

::: 提示
如果发现你的目录只能显示二级标题，则你需要在.md 文件顶部加上

```
---
outline: deep
---
```

如果发现自己目录想显示不止三层，可在`config.ts`中的`themeConfig`加上`outline: [2, 6]`，写一个 2-6 之间的值，就表示显示几层，对应的上面获取的 dom 也需要再获取 `h5 h6`。

### 渲染标识

上面已经把 symbol 对应的变量以及方法写好了。然后我们要到`theme`下的`index.ts`去渲染它。
首先导入需要使用的东西。

```ts
import { Theme, inBrowser } from 'vitepress'
import defaultTheme from 'vitepress/theme'
import { replaceSymbol, setSymbolStyle } from './plugins/symbol'
```

然后扩展默认的 theme：

```ts
const theme: Theme = {
  ...defaultTheme,
  enhanceApp({ app, router }) {
    if (inBrowser) {
      setSymbolStyle()

      router.onAfterRouteChanged = (to) => {
        replaceSymbol()
      }
    }
  }
}

export default theme
```

当页面加载完后就动态加载标识的样式；每当路由改变后就进行标识的查找替换。

这个默认导出的 theme 不需要在其他地方引入，会默认使用它。

### BUG ~new

发布上线后，发现文章的标识还是显示 ~new，只有当每次手动刷新时才会渲染出来。设想过各种可能的问题，但是经过证实都排除了：

- `setSymbolStyle()`和`replaceSymbol()`执行顺序
- `onAfterRouteChanged`未触发
- 代码是否正确

最后发现是因为我添加了评论服务后，重写了`Layout`组件，在 theme/index.ts 中执行替换标识后被渲染的`Layout`覆盖了。`router.onAfterRouteChanged`无法根据路由变化去执行`replaceSymbol()`（原因还未知）。后来我使用`Vue`的 watch 来监听路由变化:

```js
router.onAfterRouteChanged = (to) => {
  replaceSymbol()
}

// --->

watch(
  () => router.route.data.relativePath,
  () => replaceSymbol(),
  { immediate: true }
)
```

## 文章图片缩放

在 vitepress 中文章的图片放大缩小，这个功能是立马想到立马就着手做了。我在浏览自己的文章时，有些图片不是细节图，而是整个屏幕大的图片，这时看图片里的细节就会显得很无力。

当时还不知道怎样去解决这个问题。有问题第一时间都是看看有没有插件能解决，网上有没有已经解决的案例。经探索发现了两个库：

- [lightGallery](https://www.lightgalleryjs.com/)
- [medium-zoom](https://medium-zoom.francoischalifour.com/)

`lightGallery`这个库功能比较全面包含了许多操作图片的功能，`medium-zoom`而是个较为简单的图片缩放功能的库。根据我自身的需求，选择了`medium-zoom`。

::: tip
有时间我会试试`lightGalley`的实现
:::

### 前期准备

```shell
pnpm install medium-zoom
```

### ZoomImg 组件

按照我的规范，先在`docs/.vitepress/theme/components`下新建组件`ZoomImg.vue`。其实看了[官方文档](https://medium-zoom.francoischalifour.com/)实现是比较简单的。

通过获取图片的实例，将图片实例作为 mediumZoom 的第一个参数：

```vue
<template>
  <img ref="imgRef" :src="withBase(src)" :alt="desc" />
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
import { ref, onMounted } from 'vue'
import mediumZoom from 'medium-zoom'

defineProps<{
  src: string
  desc?: string
}>()

const imgRef = ref<HTMLElement>()

onMounted(() => {
  mediumZoom(imgRef.value)
})
</script>
```

::: tip

所有静态资源路径都会自动处理，以适应不同的基本配置值。例如，如果您在 markdown 中对 public 下的资产有绝对引用，在这种情况下，当您更改基本配置值时，无需更新它。  
但是，如果您正在编写动态链接。在这种情况下，建议使用 VitePress 提供的 `withBase` 帮助器包裹路径。

:::

### 注册全局组件

来到`docs/.vitepress/theme/index.ts`:

```ts
const theme: Theme = {
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('ZoomImg', ZoomImg) // 记得引入组件
  }
}
```

### 使用

注册好组件后，就可以在.md 文件中使用了。如果阅读过`vitepress`文档应该知道项目中的.md 文件可以直接使用全局注册的组件:

```md
<!-- previous -->

![alt](img source)

<!-- now -->

<ZoomImg src="src" alt="alt" />
```

### 样式问题

这个时候其实已经可以正常使用了，但是你会发现你放大后的图片可能会出现这种情况：

<ZoomImg src="/assets/articles/vitepress/zoom-bug.png" desc="放大图片后的问题" />

由于层级问题，图片有一部分被挡住了，而且遮罩层也没有样式。这需要我们手动为对应的类名加上层级样式才能解决：

```css
--medium-zoom-z-index: 100;
--medium-zoom-c-bg: #ffffff;

.medium-zoom-overlay {
  z-index: var(--medium-zoom-z-index);
  background: var(--medium-zoom-c-bg) !important;
}

.medium-zoom-overlay ~ img {
  z-index: calc(var(--medium-zoom-z-index) + 1);
}
```

我们还可以继续给这个图片组件进行优化：

```vue
<template>
  <div class="img-wrap">
    <img ref="imgRef" :src="withBase(src)" :alt="desc">
    <span>{{ desc }}</span>
  </div>
</template>

<style lang="scss" scoped>
.img-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  span {
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: 12px;
    color: #999999;
  }
}
```

这样图片组件的样式看起来就舒服多了：

<ZoomImg src="/assets/articles/vitepress/zoom-img-component.png" desc="图片样式效果" />
