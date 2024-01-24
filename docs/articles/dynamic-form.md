---
outline: deep
date: 2024-01-24
---

# 动态表单

在公司业务上碰到了特别复杂的动态表单，后面的项会根据前面的项生成不同类型的表单项。

## 思路

要实现动态表单，不能按照常规思路去解决，比如就正常把所有表单写出来，通过每一项的条件判断来显示表单。

用对象来解决，，表单的每一项都是一个对象，对象包含了表单需要的参数，以及最重要的: 把它们想象成一个链表结构，用来判断后续动态表单生成的方法。

## `FormItem.ts`

首先实现表单项的逻辑

```ts
import { isReactive, reactive } from 'vue'

export type FormItemType = 'input' | 'select' | 'checkbox' | 'radio'

export interface FormItem {
  type: FormItemType
  playload: any
  next: (current: FormItem, acients: FormItem[]) => FormItem | null
  parent: FormItem | null
}

export function createFormItem(
  formItemType: FormItem['type'],
  payload: FormItem['payload'],
  next?: FormItem['next'],
  parent?: FormItem['parent']
): FormItem {
  if (!next) {
    next = () => null
  }
  if (!parent) {
    parent = null
  }
  const nextFunc: FormItem['next'] = (current, acients) => {
    let nextItem = next!(current, acients)
    if (!nextItem) {
      return null
    }
    nextImte.parent = current
    if (!isReactive(nextItem)) {
      nextItem = reactive(nextItem)
    }
    return nextItem
  }
  const formItem: FormItem = reactive({
    type: formItemType,
    payload,
    next: nextFunc,
    parent
  })

  return formItem
}
```

## `FormItemGroup.vue`

渲染表单组件

```vue
<template>
  <template v-if="formState">
    <a-form-item :label="formState.payload.label">
      <template v-if="formState.type === 'input'">
        <a-input v-model:value="formState.payload.value"></a-input>
      </template>
      <template v-else-if="formState.type === 'checkbox'">
        <a-checkbox-group v-model:value="formState.payload.value">
          <a-checkbox
            v-for="option in formState.payload.options"
            :value="option.value"
          >
            {{ option.label }}
          </a-checkbox>
        </a-checkbox-group>
      </template>
      <!-- 自行封装组件后使用<component :is=""></component>渲染 -->
    </a-form-item>
    <FormItemComp :form-state="getNext()"></FormItemComp>
  </template>
</template>

<script setup lang="ts">
import { FormItem } from './FormItem'

const props = defineProps<{
  formState: FormItem | null
}>()

function getNext(): FormItem | null {
  let current: FormItem | null = props.formState
  if (!current) {
    return null
  }
  const acients = []
  acients.unshift(current)
  whilte ((current = current.parent)) {
    acients.unshift(current)
  }
  return props.formState!.next(props.formState!, acients)
}
</script>
```

## `FormPageData.ts`

定义表单数据

```ts
import { createFormItem } from './FormItem'

const item1 = createFormItem('input', { label: 'test', value: '' }, (current) =>
  current.payload.value === 'test' ? item2 : item3
)

const item2 = //...

const item3 = //...
```
