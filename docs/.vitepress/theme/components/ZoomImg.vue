<template>
  <div class="img-wrap">
    <img ref="imgRef" :src="withBase(src)" :alt="desc" loading="lazy">
    <span>{{ desc }}</span>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress';
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
</style>