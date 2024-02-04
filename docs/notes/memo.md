---
outline: deep
date: 2023-11-20
---

# 备忘录

yt，这个模块我用来记一些我看到优质文章或者需要解决某些疑问且来不及去阅读或解决，故把记录于此。

还包括我近期需要进行的学习路线等等杂项都会在此记录。

## 路线

- 查缺补漏 JavaScript
- 补足 TypeScript
- 记录面试需要的基础知识
- ~~前端工程化之模块化~~
- ~~前端工程化之包管理器~~
- 前端工程化之构建工具, Webpack 等
- 前端工程化之脚手架
- 前端自动化(流水线)
  - 服务器部署
  - nginx 配置
  - CI/CD
- Rust (这个语言到底有什么魅力，前端很多工具都选择用 Rust 编写来提高性能)

## 评论模块

集成的评论模块，想修改样式去更贴合本站的主题样式。

## 本站主题样式

这个彩色主题有些地方没有生效：

- Navbar Item 选中和`hover`的样式
- 文章中`a`标签和`hover`时的样式
- 主页`feature`模块`hover`时边框的样式

## ZoomImg 组件

进入页面后图片没在视口应该`懒加载`，且如果有 size 较大的图片在第一视口内，加载起来也会比较慢，所有需要`图片渐进式加载`。

懒加载就直接使用`img`元素自带的`loading=lazy`即可。在[`vitepress@1.0.0-rc.34`](https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md#100-rc34-2023-12-30)新支持了自定义图片懒加载配置，可以在`config.ts`中打开:

```ts
export default defineConfig({
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
```

图片渐进式加载还没有找到解决方案。

参考文章：

[图片渐进式加载的实现方法](https://akarin.dev/2021/11/04/progressive-image-loading/)  
[加载背景图像的“模糊”技术](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)

::: tip
图片渐进式加载是指图片在加载过程中先使用图片的缩略图（facebook 工程团队）代替，待图片加载完成后再替换为原图，可以大大优化用户体验。但是对于性能要求当然是懒加载更优一点。但是同时使用这两个也不冲突。
:::

本来看到了一个解决方案，是通过[blurhash](https://github.com/woltapp/blurhash/tree/master)通过特定的算法将原图进行了离散余弦变换，提取出最多 10x10=100 个系数，以 0-18 的范围表示颜色，按照一些紧凑的规则编码成二进制数据，再使用特别选择的字母表进行 Base83 编码，保证在 URL 和 JSON 等地方不需要额外转义就可以直接传输。  
但是这个方案需要通过后端生成`hash`返回给前端，前端通过`decode`获取缩略图。对于`VitePress`纯静态网站来说，这种方案只能放弃了。

## 下期文章

本来应该轮到学习工程化第三步(构建工具，先学习 webpack)了，学习这个时间应该会长一些，所以我打算先更新点别的。

上面内容先不更新了，构建工具这部分内容比较多，需要深度学下比较有代表的 webpack。

另外公司最近频繁有新项目的消息，我不想每次都手动搭建一个模板或者去网上凑合找一个模板，准备自己搭建一个通用的后台管理模板用。最近可能更新频率会低很多。

## 待阅

[前端工程化详解](https://guide.duanhl.com/)
