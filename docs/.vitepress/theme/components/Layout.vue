<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

import Twikoo from './Twikoo.vue'
import NavVisitor from './NavVisitor.vue';
import { useData } from 'vitepress';
import NavLogo from './NavLogo.vue';

const { Layout } = DefaultTheme

const { frontmatter } = useData()
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