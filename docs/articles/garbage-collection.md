---
outline: deep
date: 2024-01-11
---

# 内存泄漏和垃圾回收

<br />

<ZoomImg src="/assets/articles/garbage-collection/garbage.jpg" />

像 C 这样的底层语言一般都有底层的内存管理接口，比如`malloc()`和`free()`。相反，**JavaScript 是在创建变量时自动进行内存分配，并且在不使用他们时"自动"释放**。释放的过程称为垃圾回收。这个"自动"是混乱的根源，并让 JavaScript 开发者错误的感觉他们可以不关心内存管理。

不管什么语言，内存的生命周期基本是一致的:

1. 分配你所需要的内存
2. 使用分配到的内存（读、写）
3. 不需要时将其释放/归还

> 所有语言第二部分都是明确的。第一和第三部分在底层语言中是明确的，但在像 JavaScript 这些高级语言中，大部分都是隐含的。

在 Chorme 浏览器中，V8 被限制了内存的使用`(x64约1.4G/1464MB)/(x86约0.7G/732MB)`，限制的主要原因是 V8 最初为浏览器而设计，不太可能遇到用大量内存的场景，更深层原因是 V8 垃圾回收机制的限制: _清理大量的内存垃圾很耗时间，这样会引起 JavaScript 线程暂停执行，导致性能和应用直线下降。_

## 内存泄漏

内存泄漏(Memory leak)是在计算机科学中，由于疏忽或错误造成程序未能释放已经不再使用的内存。

并非指内存在物理上的消失，而是应用程序分配某段内存后，由于设计错误，导致在释放改段内存之前就失去了对该段内存的控制，从而造成内存的浪费。

程序的运行需要内存。只要程序提出要求，操作系统或运行时(runtime)就必须供给内存。

对于持续运行的服务进程，必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。

## 常见的内存泄漏

写得不好的 JavaScript 可能出现难以察觉且有害的内存泄漏问题。

在内存有限的设备上，或者在函数会被调用很多次的情况下，内存泄漏可能是个大问题。JavaScript 中的内存泄露大部分是由不合理的引用导致的。

### 意外声明的全局变量

JavaScript 对未声明变量的处理方式: 在全局对象上创建该变量的引用(即全局对象上的属性，不是变量，因为它能通过`delete`删除)。如果在浏览器中，全局对象就是 window 对象。

如果未声明的变量缓存大量的数据，会导致这些数据只有在窗口关闭或重新刷新页面时才能被释放。这样会造成意外的内存泄漏。

```js
function foo(arg) {
  bar = 'Leet'
}

// 等同于
function foo(arg) {
  window.bar = 'Leet'
}
```

通过 this 创建意外的全局变量:

```js
function foo(arg) {
  this.val = 'Leet'
}

// 当在全局作用域下调用foo函数，此时this指向的是全局对象window，而不是'undefined'
foo()
```

此时，解释器会把变量`name`当作`window`的属性来创建（`window.name = 'Leet'`）。只要在`window`对象上创建的属性，只要`window`本身不被清理就不会消失。这个问题很容易解决:

- 只要在变量声明前加上`let`或`const`关键字即可，这样变量就会在函数执行完毕后离开作用域。
- 在文件中添加`use strict`开启严格模式可以有效避免

```js
function foo(arg) {
  'use strict'
  bar = 'Leet' // 报错bar未声明
}
```

### `console.log`

`console.log`: 向 web 开发控制台打印一条消息，常用来开发时调试分析。有时在开发时，需要打印一些对象信息，但发布时却忘记去掉`console.log`，这可能造成内存泄漏。

在传递给`console.log`的对象是不能被垃圾回收的，因为在代码运行之后需要在开发工具能查看对象信息。所以最好不要在生产环境中`console.log`任何对象，另外还有`console.dir`、`console.err`、`console.warn`等都存在类似问题，这些细节需要特别关注。

### 闭包(Closures)

当一个函数 A 返回一个内联函数 B，即使函数 A 执行完，函数 B 也能访问函数 A 作用域内的变量，这就是一个闭包————本质上闭包是将函数内部和外部连接起来的一座桥梁。

```js
function foo(msg) {
  function closure() {
    console.log(msg)
  }

  return closure
}

let bar = foo('leet')
bar() // 'leet'
```

在函数 foo 内创建的函数 closure 对象是不能被回收掉的，因为它被全局变量 bar 引用，处于一直可访问状态。通过执行`bar()`可以打印出`leet`。如果想释放掉可以将`bar = null`即可。

> 由于闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。过度使用闭包可能会导致内存占用过多。

### DOM 泄露

DOM 元素的生命周期正常情况下取决于是否挂载在 DOM 树上，当元素从 DOM 树上移除时，就可以被销毁回收了。

但如果某个 DOM 元素在 JS 中也持有它的引用，想要彻底删除这个元素，就需要把两个引用都清楚，这样才能正常回收它。

```js
// 在对象中引用 DOM
var elements = {
  btn: document.getElementById('btn')
}
function doSomeThing() {
  elements.btn.click()
}

function removeBtn() {
  // 移除 DOM 树中的 btn
  document.body.removeChild(document.getElementById('button'))
  // 但是此时全局变量 elements 还是保留了对 btn 的引用, btn 还是存在于内存中,不能被 GC 回收
}
```

虽然别的地方删除了，但是对象中还存在对 dom 的引用。

解决方法是删除 DOM 节点时，也要释放 JS 对节点的引用：`elements.btn = null`

### timers

在 JavaScript 常用`setInterval()`来实现一些动画效果。当然也可以使用链式`setTimeout()`调用模式来实现:

```js
setTimeout(function () {
  setTimeout(arg.callee, interval)
}, interval)
```

如果在不需要`setInterval()`时，没有通过`clearInterval()`方法移除，那么`setInterval()`会不停的调用函数，直到调用`clearInterval()`或窗口关闭。如果链式`setTimeout()`调用模式没有给出终止逻辑，也会一直运行下去。

**_因此在不需要重复定时器时，确保对定时器进行清除_**，避免占用系统资源。另外，在使用`setInterval()`和`setTimeout()`来实现动画时，无法确保定时器按照指定的时间间隔来执行动画。

为了能在 JavaScript 中创建出平滑流畅的动画，浏览器为 JavaScript 动画添加了一个新 API`requestAnimationFrame()`。

### EventListener

做移动开发时，需要对不同设备尺寸做适配。如在开发组件时，有时候需要考虑处理横竖屏适配问题。一般做法，在横竖屏发生变化时，需要将组件销毁后再重新生成。而在组件中会对其进行相关事件绑定，如果在销毁组件时，没有将组件的事件解绑，在横竖屏发生变化时，就会不断地对组件进行事件绑定。这样会导致一些异常，甚至可能会导致页面崩掉。

在开发中，开发者很少关注事件解绑，因为浏览器已经为我们处理得很好了。不过在使用第三方库时，需要特别注意，因为一般第三方库都实现了自己的事件绑定，如果在使用过程中，在需要销毁事件绑定时，没有调用所解绑方法，就可能造成事件绑定数量的不断增加。

## 参考

[JS 内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management)  
[JS 内存泄漏和垃圾回收机制](https://juejin.cn/post/7083477868508315684)  
[面试官：说说 JavaScript 中内存泄漏的几种情况？](https://vue3js.cn/interview/JavaScript/memory_leak.html)  
[常见的 JavaScript 内存泄漏](https://github.com/zhansingsong/js-leakage-patterns/blob/master/%E5%B8%B8%E8%A7%81%E7%9A%84JavaScript%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2/%E5%B8%B8%E8%A7%81%E7%9A%84JavaScript%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2.md)  
[谈谈 GC：新的 Orinoco 垃圾收集器](https://v8.js.cn/blog/trash-talk/)
