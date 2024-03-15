---
outline: deep
date: 2024-03-15
---

# Vue 基础

最好的教程就是官方文档，自己打算多过即便文档，来查缺补漏，并记录一些不常见或者重要的知识。

## `v-html`

可以利用 v-html 指令来渲染 html 内容；**_但注意，你不能使用 v-html 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎_**

> 在网站上动态渲染任意 HTML 是非常危险的，因为这样非常容易造成 XSS 漏洞。请仅在内容完全可信时再使用 v-html，并且永远不要使用用户提供的 HTML 内容。

## v-bind

如果绑定的值是 null 或 undefined，那么该 attribute 将会从渲染的元素上移除

_同名简写_，在 Vue3.4+中，当属性名和值的名称相同时，可以使用类似于 ES6 对象属性的写法:

```vue
<div :id></div>

<!-- 等同于 -->

<div :id="id"></div>

<div v-bind:"id"></div>
```

`v-bind`在表单的`:disabled`下的行为略有不同:  
当值为真值或是空字符串时，元素会包含这个属性，而当为其他假值时属性才会被忽略。

没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 window 上的属性。然而，你也可以自行在 app.config.globalProperties 上显式地添加它们，供所有的 Vue 表达式使用。

## 指令

### 动态参数

在指令参数上也可以使用 js 表达式，需要包含在一对方括号内:

```vue
<!--
注意，参数表达式有一些约束

动态参数值的限制：动态参数中表达式的值应当是一个字符串，或是null。
特殊值null意为显示一处该绑定，其他非字符串的值会触发警告

动态参数语法的限制：动态参数表达式因为某些字符的缘故有一些语法限制，
比如空格和引号，在HTML attribute名称中都是不合法的；
如果需要传入复杂动态参数，最好使用计算属性；
避免在名称中使用大写字母，浏览器会强制转换成小写字母
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```

## 响应式

### `ref`

可以通过`shallowRef`来放弃 ref 的深层响应性，可以避免大型数据的响应性开销。

### DOM 更新时机

当你修改了响应式状态时，DOM 会被自动更新。但是需要注意的是，DOM 更新不是同步的。Vue 会在`next tick`更新周期中缓冲所有状态的修改，以确保不管你进行了多少次状态修改，每个组件都只会被更新一次。

要等待 DOM 更新完成后再执行额外的代码可以使用全局 API: `nextTick()`

### `reactive`

也可以通过`shallowReactive`来退出深层响应性。

**局限性**

- 有限的值类型: 只能用于对象类型(对象、数组和`Map`、`Set`这样的集合类型)
- 不能替换整个对象: 由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失

```js
let state = reactive({ count: 0 })

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({ count: 1 })
```

- 对解构操作不友好: 当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接

```js
const state = reactive({ count: 0 })

// 当解构时，count 已经与 state.count 断开连接
let { count } = state
// 不会影响原始的 state
count++

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
callSomeFunction(state.count)
```

由于这些限制，更建议使用 ref。

### 额外的 ref 解包细节

**作为 reactive 对象的属性**

一个 ref 会在作为响应式对象的属性被访问或修改时自动解包。换句话说，它的行为就像一个普通的属性

```js
const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1
```

如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref

```js
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1
```

只有当嵌套在一个深层响应式对象内时，才会发生 ref 解包。当其作为浅层响应式对象的属性被访问时不会解包。

## 计算属性

若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 author.books 不改变，无论多少次访问 publishedBooksMessage 都会立即返回先前的计算结果，而不用重复执行 getter 函数。

相比之下，方法调用总是会在重渲染发生时再次执行函数。

为什么需要缓存呢？想象一下我们有一个非常耗性能的计算属性 list，需要循环一个巨大的数组并做许多计算逻辑，并且可能也有其他计算属性依赖于 list。没有缓存的话，我们会重复执行非常多次 list 的 getter，然而这实际上没有必要！如果你确定不需要缓存，那么也可以使用方法调用。

### 可写计算属性

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    ;[firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>
```

### 可传参的计算属性

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => (value) => {
  return firstName.value + value + lastName.value
})
</script>
```

### 最佳实践

**Getter 不应有副作用**:  
计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，**不要改变其他状态、在 getter 中做异步请求或者更改 DOM！**一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。

**避免直接修改计算属性值**:  
从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。

## 样式绑定

当在自定义组件上使用样式，且组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的`$attrs`属性来实现指定:

```vue
<!-- MyComponent 模板使用 $attrs 时 -->
<p :class="$attrs.class">Hi!</p>
<span>This is a child component</span>
```

```vue
<MyComponent class="baz" />
```

这将被渲染为:

```vue
<p class="baz">Hi!</p>
<span>This is a child component</span>
```

### 样式多值

```vue
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

数组仅会渲染浏览器支持的最后一个值。在这个示例中，在支持不需要特别前缀的浏览器中都会渲染为 display: flex。

## 条件渲染

v-if 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

v-if 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。

相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。

总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。

## 列表渲染

你也可以使用 v-for 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定。

```vue
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
```

::: warning
同时使用 v-if 和 v-for 是不推荐的，因为这样二者的优先级不明显。

当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名：
:::

### 数组变化侦测

Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括(能改变原数组)：

push()
pop()
shift()
unshift()
splice()
sort()
reverse()

在计算属性中使用 reverse() 和 sort() 等其他能改变原数组的方法的时候务必小心！这两个方法将变更原始数组，计算函数中不应该这么做。请在调用这些方法之前创建一个原数组的副本: `return [...array].reverse()`

## 事件处理

内联事件处理器和方法事件处理器的区别:

模板编译器会通过检查 v-on 的值是否是合法的 JavaScript 标识符或属性访问路径来断定是何种形式的事件处理器。举例来说，foo、foo.bar 和 foo['bar'] 会被视为方法事件处理器，而 foo() 和 count++ 会被视为内联事件处理器。

有时候看到`<div @click="foo()"></div>`和`<div @click="foo"></div>`都是一样的效果，到底有哪里不同。

```vue
<div @click="foo()"></div>
<!-- 等价于 -->
<div @click="() => foo()"></div>
<!-- 且获取不到事件参数，需要主动传入 -->
<div @click="(event) => foo(event)"></div>
<div @click="foo($event)"></div>
```

而一下这种是自带事件参数， 在方法中能直接访问

```vue
<div @click="foo"></div>

<script setup>
function foo(event) {
  console.log(event)
}
</script>
```

## 表单输入绑定

::: tip
`v-model` 会忽略任何表单元素上初始的 `value`、`checked` 或 `selected` attribute。它将始终将当前绑定的 JavaScript 状态视为数据的正确来源。你应该在 JavaScript 中使用响应式系统的 API 来声明该初始值。
:::

::: tip
对于需要使用 IME 的语言 (中文，日文和韩文等)，你会发现 `v-model` 不会在 IME 输入还在拼字阶段时触发更新。如果你的确想在拼字阶段也触发更新，请直接使用自己的 `input` 事件监听器和 `value` 绑定而不要使用 `v-model`。
:::

::: tip
如果 `v-model` 表达式的初始值不匹配任何一个选择项，`<select>` 元素会渲染成一个“未选择”的状态。在 iOS 上，这将导致用户无法选择第一项，因为 iOS 在这种情况下不会触发一个 change 事件。因此，我们建议提供一个空值的禁用选项，如上面的例子所示。
:::

### 复选框

```vue
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
```

`true-value` 和 `false-value` 是 Vue 特有的 attributes，仅支持和 `v-model` 配套使用。这里 `toggle` 属性的值会在选中时被设为 `'yes'`，取消选择时设为 `'no'`。你同样可以通过 `v-bind` 将其绑定为其他动态值

::: tip
`true-value` 和 `false-value` attributes 不会影响 `value` attribute，因为浏览器在表单提交时，并不会包含未选择的复选框。为了保证这两个值 (例如：“yes”和“no”) 的其中之一被表单提交，请使用单选按钮作为替代。
:::
