# 文章目录添加自定义标识

你可以看到文章右侧目录应该有些有标识，这个是怎么做的？

我在看一篇 Vue3 的教程时看到了这个教程是用 VitePress 做的，而且它的目录有部分有自定义的标识。标识可以让我们编写以前的文章时，为某部分添加标识以识别这部分内容是不是新加的。

有幸的是这个作者的这个网站源代码是开源的，我查阅之后知道了怎么实现这个功能。

## 扩展 theme

项目的 theme 是默认的，而且配置是在`config.ts`中。我们需要在`/.vitepress`下新建`theme`目录，然后新建`index.ts`。

之后我们创建用户给目录添加标识的自定义插件，`theme`文件夹下新建`plugins`文件夹，再新建`symblo.ts`。目录结构应该为以下：

```
└─.vitepress
   └─theme
      ├─plugins
      |   └─symbol.ts
      └─index.ts
```

## symbol.ts

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
    .sidebar__icon--hot {
      background-color: #da5961;
    }
    .sidebar__icon--hot:before {
      content: "H";
      background-color: #da5961;
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

## 渲染标识

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

## BUG ~new

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
