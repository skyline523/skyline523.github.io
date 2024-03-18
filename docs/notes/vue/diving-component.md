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
