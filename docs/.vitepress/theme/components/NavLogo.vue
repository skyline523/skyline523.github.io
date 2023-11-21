<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const element = ref<HTMLElement>()

const isDark = ref<boolean>(false)

const logo = computed<string>(() => 
  isDark.value ? '/assets/logo-light.svg' : '/assets/logo.svg'
)

// 侦听器
const observer = ref<MutationObserver>()

function init() {
  const el = document.querySelector('html')
  if (!el) return
  element.value = el

  // 包含该样式说明处于 dark mode
  isDark.value = element.value.classList.contains('dark')

    // 初始化侦听器
    observer.value = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const { type, target } = mutation
      if (type === 'attributes') {
        isDark.value = (target as HTMLElement).classList.contains('dark')
      }
    })
  })

  // 绑定侦听
  observer.value.observe(element.value, {
    subtree: false,
    attributes: true,
    attributeFilter: ['class'],
  })
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<template>
  <img
    width="54"
    :src="logo"
  />
</template>

<style scoped>

</style>