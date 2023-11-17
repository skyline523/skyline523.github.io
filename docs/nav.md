---
layoutClass: m-nav-layout
---

<script setup>
import LNavLinks from './.vitepress/theme/components/LNavLinks.vue'

import { NAV_DATA } from './.vitepress/theme/data/nav.ts'
</script>

<style src='./.vitepress/theme/styles/nav.scss'></style>

# 导航

> 本站导航用于记录自己使用过的工具、库以及在线工具等
>
> 内容会慢慢补充，样式之后也会修改一下，目前 cv 过来的样式不是很对我胃口
>
> 声明：仅为了方便本人寻找想使用的工具

<LNavLinks
  v-for="{ title, items } in NAV_DATA"
  :key="title"
  :title="title"
  :items="items"
/>

## 参考

参考自 [茂茂物语](https://notes.fe-mm.com/nav)： [使用 VitePress 打造个人前端导航网站](https://juejin.cn/post/7204860462239498296)
