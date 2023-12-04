---
outline: deep
date: 2023-12-04
---

<script setup>
import { tools } from '../.vitepress/theme/data/tools.ts'
</script>

# 常用工具库

> 自己在发现的实用性高的和自己经常使用的库

<LNavLinks
  v-for="{ title, items } in tools"
  :key="title"
  :title="title"
  :items="items"
/>

<style scoped>
.content-container {
  margin: 0 auto;
}
</style>
