---
outline: deep
---

# 备忘录和快捷入口

如题，备忘录这个模块我用来记一些我看到好看的文章或者需要解决某些疑问的文章，且当时来不及去阅读，故把文章链接保存在这里。还有博客建站以后想加的模块和内容。  
快捷入口就是我平时逛逛社区，文档啥的突然看到一些好玩的网站或插件之类的，或是能给我的项目用上的技术等等。

## 备忘录

### VitePress 文章底部时间

这篇文章是**VuePress**上 last updated 最后更新时间的设置，可能会和**VitePress**有些许不同。内容并不是如官网给一个这个配置而打开最后更新时间的选项：

```ts
export default defineConfig {
  themeConfig: {
    lastUpdated: true
  }

  // or open it and set last updated text
  themeConfig: {
    lastUpdated: {
      text: '最后更新于: '
    }
  }
}
```

而是开启选项后，并未显示最后更新时间，和对更新时间机制的解读。

文章链接：  
[VuePress 博客优化之 last updated 最后更新时间如何设置](https://github.com/mqyqingfeng/Blog/issues/244)

### 建站

<br />

#### 评论服务 ~new

于 2020-11-10 完成。  
问题：点赞，评论点击后会回到顶部。

目前想到比较好玩的部分就是评论服务，给每篇文章底部加上评论，以及一个单独的评论页面。(我也不管有没有人会看我的网站。。。)，以我目前的水平是无法开发出这种东西的，太高看自己了，于是我找到了两个开源的评论服务。

[waline](https://waline.js.org)  
[twikoo](https://twikoo.js.org)

#### 网站布局

网站的布局暂时先这样，等我参考够了再来试试怎样的布局能让我自己赏心悦目 🙂。

#### 添加 RSS

[参考文章](https://laros.io/generating-an-rss-feed-with-vitepress)

## 快捷入口

### 建站参考和灵感来源

[Clark Cui](https://visionary-sunflower-dc7ae3.netlify.app/)

[君惜](https://xinlei3166.github.io/)

[iMaeGoo](https://www.imaegoo.com/)

[茂茂物语](https://notes.fe-mm.com/)

[Vue3 入门指南与实战案例](https://vue3.chengpeiquan.com/)

[使用 VitePress 打造个人前端导航网站](https://juejin.cn/post/7204860462239498296)

### 插件

[waline 评论服务](https://waline.js.org)

[twikoo 评论服务](https://twikoo.js.org)

[@bassist/utils 常用函数工具](https://paka.dev/npm/@bassist/utils@0.14.0/api)

### 踩坑

今天上线给策划用的项目，他们反馈提交表单时无效。我在本地看了下代码没有任何问题，事件触发也正常。

最后是发现 formRules 中自定义的校验规则，除去捕获到的校验错误有 callback，正常情况下没有捕获的校验错误也必须得返回一个空的 callback，否则是无法通过校验而且不会有校验错误的提示！！！
