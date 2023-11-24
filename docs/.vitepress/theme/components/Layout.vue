<script setup lang="ts">
import { nextTick, provide } from 'vue'
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme'

import Twikoo from './Twikoo.vue'
import NavVisitor from './NavVisitor.vue';
import NavLogo from './NavLogo.vue';

const { Layout } = DefaultTheme

const { frontmatter, isDark } = useData()

function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <Layout :class="frontmatter.value?.layoutClass">
    <template #nav-bar-title-after>
      <NavLogo />
      <NavVisitor />
    </template>
    <template #doc-after>
      <Twikoo></Twikoo>
    </template>
  </Layout>
</template>

<style>
.twikoo .el-loading-spinner .circular {
  margin-left: auto;
  margin-right: auto;
}
</style>