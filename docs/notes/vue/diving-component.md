---
outline: deep
date: 2024-03-18
---

# 深入组件

## Props

### 传递 prop 的细节

**使用一个对象绑定多个 prop**

如果你想要将一个对象的所有属性都当作 props 传入，你可以使用没有参数的 `v-bind`，即只使用 `v-bind` 而非 `:prop-name`。

```vue
<script setup>
const post = {
  id: 1,
  title: 'My Journey with Vue'
}
</script>

<BlogPost v-bind="post" />
<!-- 等价于 -->
<BlogPost :id="post.id" :title="post.title" />
```

### 单向数据流

**_所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。_**

如果要更改一个 prop 通常是下面两种场景：

1. prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。

```ts
const props = defineProps(['initialCounter'])

// 计数器只是将 props.initialCounter 作为初始值
// 像下面这样做就使 prop 和后续更新无关了
const counter = ref(props.initialCounter)
```

2. 需要对传入的 prop 值做进一步的转换。

```ts
const props = defineProps(['size'])

// 该 prop 变更时计算属性也会自动更新
const normalizedSize = computed(() => props.size.trim().toLowerCase())
```

**更改对象 / 数组类型的 props**

当对象或数组作为 props 被传入时，虽然子组件无法更改 props 绑定，但仍然可以更改对象或数组内部的值。这是因为 JavaScript 的对象和数组是按引用传递，而对 Vue 来说，禁止这样的改动，虽然可能生效，但有很大的性能损耗，比较得不偿失。

这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。在最佳实践中，你应该尽可能避免这样的更改，除非父子组件在设计上本来就需要紧密耦合。_在大多数场景下，子组件应该抛出一个事件来通知父组件做出改变。_
