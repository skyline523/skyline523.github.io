# 文章图片缩放

在 vitepress 中文章的图片放大缩小，这个功能是立马想到立马就着手做了。我在浏览自己的文章时，有些图片不是细节图，而是整个屏幕大的图片，这时看图片里的细节就会显得很无力。

当时还不知道怎样去解决这个问题。有问题第一时间都是看看有没有插件能解决，网上有没有已经解决的案例。经探索发现了两个库：

- [lightGallery](https://www.lightgalleryjs.com/)
- [medium-zoom](https://medium-zoom.francoischalifour.com/)

`lightGallery`这个库功能比较全面包含了许多操作图片的功能，`medium-zoom`而是个较为简单的图片缩放功能的库。根据我自身的需求，选择了`medium-zoom`。

::: tip
有时间我会试试`lightGalley`的实现
:::

## 前期准备

```shell
pnpm install medium-zoom
```

## ZoomImg 组件

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

## 注册全局组件

来到`docs/.vitepress/theme/index.ts`:

```ts
const theme: Theme = {
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('ZoomImg', ZoomImg) // 记得引入组件
  }
}
```

## 使用

注册好组件后，就可以在.md 文件中使用了。如果阅读过`vitepress`文档应该知道项目中的.md 文件可以直接使用全局注册的组件:

```md
<!-- previous -->

![alt](img source)

<!-- now -->

<ZoomImg src="src" alt="alt" />
```

## 样式问题

这个时候其实已经可以正常使用了，但是你会发现你放大后的图片可能会出现这种情况：

<ZoomImg src="/assets/vitepress/img-zoom/zoom-bug.png" desc="放大图片后的问题" />

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

<ZoomImg src="/assets/vitepress/img-zoom/zoom-img-component.png" desc="图片样式效果" />
