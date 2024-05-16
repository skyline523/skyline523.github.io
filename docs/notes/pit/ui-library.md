---
outline: deep
date: 2023-11-20
---

# UI 库踩坑记录

这个文章用于归档一些我在工作或者平时写项目时碰上的 BUG。

## Element Plus

### 表单校验通过但阻塞后续流程

今天上线给策划用的项目，他们反馈提交表单时无效。我在本地看了下代码没有任何问题，事件触发也正常。

最后是发现 formRules 中自定义的校验规则，除去捕获到的校验错误有 callback，正常情况下没有捕获的校验错误也必须得返回一个空的 callback，否则是无法通过校验而且不会有校验错误的提示！！！

```ts
const formRules = ref<FormRules>({
  name: [
    {
      validator: (rule, value, callback) => {
        const c = 'something'

        if (c) {
          callback(new Error('课程名称已存在'))
        }
        // 这里一定要记得调用一次callback()
        callback()
      }
    }
  ]
})
```

### table 设置高度问题

一般使用`el-table`时，大部分都需要固定表格高度防止整个页面滚动。element-plus 文档给了 api: `height`来设置。但是如果是这种形式`calc(100% - 12px)`这种计算形式，会出现表格底部多出来一部分，这部分高度。

<ZoomImg src="/assets/notes/pit/ui/el-table_01.png" />

如果给计算高度，`el-table`和`el-table__inner-wrapper`都会设置这个高度。

<ZoomImg src="/assets/notes/pit/ui/el-table_02.png" />

解决: 添加`max-height`使用计算高度，`height`使用 100%高度

```vue
<el-table
  :data="pageDataSource"
  max-height="calc(100% - 38px)"
  height="100%"
>
```

### el-select 宽度问题

最近给项目更新了 element-plus 版本到最新的 2.7+，之前的老版本是 2.4，更新之后发现，我自定义样式的 select 组件样式完全错乱了，而且没有就算使用原来组件的样式，该组件也没有宽度。

这就很奇怪，我开始还以为是我打包后的样式没有引入进去。尝试从这方面找问题一直找不到，后面我就来到官方仓库的 issues 下找问题，发现了根本原因，官方在 2.5.0 版本对 el-select 进行了重构，组件的 dom 结构完全变了。
