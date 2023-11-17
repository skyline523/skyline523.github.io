<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { useRoute } from 'vitepress'

const DEV = inject('DEV') as Ref<boolean>
const route = useRoute()

const pageId = computed(() => route.path.replace('.html', ''))
</script>

<template>
  <div class="copyright">
    <div class="copyright_primary">
      <img
        v-if="!DEV"
        class="visitor"
        :src="`https://visitor-badge.laobi.icu/badge?page_id=skyline523.leet.${pageId}`"
        onerror="this.style.display='none'"
      />
      <span>转载请标注本站原文地址</span>
    </div>
    <span>Copyright © 2023-present Leet</span>
  </div>
</template>

<style scoped>
.copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.copyright_primary {
  display: flex;
  align-items: center;
}

.visitor {
  display: inline-block;
  margin-right: 8px;
}

@media (max-width: 414px) {
  .visitor {
    display: none;
  }
}
</style>
