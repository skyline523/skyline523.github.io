<script setup>
import DefaultTheme from 'vitepress/theme'

import Twikoo from './Twikoo.vue'
import NavVisitor from './NavVisitor.vue';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
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