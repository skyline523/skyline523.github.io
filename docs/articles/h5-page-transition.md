---
outline: deep
date: 2024-01-29
---

# 移动端添加路由左右滑动动画

在问过 Google 之后，大致都是基于两种方案：

- 使用全局路由守卫
- 使用 watch 监听路由变化

要实现左右滑动的动画都是给路由添加类型，向左还是向右动画就通过一下方式：

- 通过监听路由的 isBack 判断是否返回
- 有直接判断父子路由关系的
- ...
- 给路由 meta 添加 index 属性，index 越大嵌套越深

我使用了最后一种方法。

## 思路

我之前按照网上的方法试过一遍，并没有解决问题，其中有个问题就是当有多个页面属于同一级，那怎样判断跳转呢？

这让我想到用堆栈的方式来存储: 存储进入的路由到 store 中，之后再判断 index 大小来确定向左还是向右，如果 to 和 from 的 index 相等，则是通过判断入栈的顺序来判断向左还是向右。

## store `page.ts`

```ts
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { RouteLocationNormalized } from 'vue-router'

export type PageDataType = {
  routeStack?: RouteLocationNormalized[]
}

export const usePage = defineStore('page', () => {
  const pageData = useStorage<PageDataType>(
    'pageData',
    {
      routeStack: []
    },
    sessionStorage
  )

  const updateRouteStack = (
    route: RouteLocationNormalized,
    type: 'add' | 'remove'
  ) => {
    if (pageData.value.routeStack?.find((rs) => rs.path === route.path)) return

    if (type === 'add') {
      pageData.value.routeStack?.push(route)
    }
    if (type === 'remove') {
      pageData.value.routeStack = pageData.value.routeStack?.filter(
        (rs) => rs.path !== route.path
      )
    }
  }

  return {
    pageData,
    updateRouteStack
  }
})
```

## `App.vue` 实现动画逻辑

```vue
<template>
  <div>
    <RouterView v-slot="{ Component }">
      <Transition :name="transitionName">
        <component :is="Component" v-if="isRouterLoaded" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { usePage } from '@/store/modules/page'

const route = useRoute()
const router = useRouter()
const { pageData, updateRouteStack } = usePage()
const { routeStack } = pageData

const transitionName = ref<string>()

watch(
  () => router.currentRoute.value,
  (to, from) => {
    updateRouteStack(to, 'add')
    if (to.meta.index > from.meta.index) {
      transitionName.value = 'slide-left'
    } else if (to.meta.index < from.meta.index) {
      transitionName.value = 'slide-right'
    } else if (to.meta.index === from.meta.index) {
      // 判断路由进栈后的顺序大小
      const toIndex = routeStack?.findIndex((rs) => rs.path === to.path) || -1
      const fromIndex =
        routeStack?.findIndex((rs) => rs.path === from.path) || -1

      if (toIndex > fromIndex) transitionName.value = 'slide-left'
      else transitionName.value = 'slide-right'

      // 路由从栈中抽出
      updateRouteStack(to, 'remove')
    } else {
      transitionName.value = ''
    }
  }
)

const isRouterLoaded = computed(() => {
  if (route.name !== null) return true
  return false
})
</script>
```

## 动画样式

在全局样式文件中添加以下样式

```scss
.slide-right-enter-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
  position: absolute;
  transition: all 0.5s;
  will-change: transform;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-to {
  z-index: 10;
  transform: translateX(100%);
}

.slide-left-enter-from {
  z-index: 10;
  transform: translateX(100%);
}

.slide-left-leave-to {
  opacity: 0.4;
  transform: translateX(-100%);
}
```
