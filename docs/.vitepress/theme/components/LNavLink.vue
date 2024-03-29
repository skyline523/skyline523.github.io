<template>
  <a v-if="link" class="m-nav-link" :href="link" target="_blank" rel="noreferrer">
    <article class="box">
      <div class="box-header">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img :src="icon" :alt="title" onerror="this.parentElement.style.display='none'" />
        </div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
      </div>
      <p v-if="desc" class="desc">{{ desc }}</p>
    </article>
    <span v-if="tag" class="VPBadge info tag">{{ tag }}</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { slugify } from '@mdit-vue/shared'
import { NavLink } from '../type';

const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  tag?: NavLink['tag']
  link: NavLink['link']
}>()

const formatTitle = computed(() => {
  if (!props.title) {
    return ''
  }
  return slugify(props.title)
})

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})
</script>

<style lang="scss" scoped>
.m-nav-link {
  position: relative;
  display: block;
  border: 1px solid transparent;
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  text-decoration: inherit;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--vp-c-bg);
    border-color: var(--vp-c-brand-1);
    box-shadow: var(--vp-shadow-2);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    color: var(--vp-c-text-1);
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border-radius: 6px;
    width: 48px;
    height: 48px;
    font-size: 24px;
    background-color: var(--vp-c-default-soft);
    transition: background-color 0.25s;
    :deep(svg) {
      width: 24px;
      fill: currentColor;
    }
    :deep(img) {
      border-radius: 4px;
      width: 24px;
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: 10px 0 0;
    line-height: 20px;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
  
  .tag {
    position: absolute;
    padding: 0 8px;
    top: 2px;
    right: 0px;
    transform: scale(.8);
    border-radius: 9999px;
  }
}

.VPBadge.info {
  border-color: var(--vp-badge-info-border);
  color: var(--vp-badge-info-text);
  background-color: var(--vp-badge-info-bg);
}


@media (max-width: 960px) {
  .m-nav-link {
    .box {
      padding: 8px;
    }
    .icon {
      width: 40px;
      height: 40px;
    }
    .title {
      line-height: 40px;
      font-size: 14px;
    }
  }
}
</style>