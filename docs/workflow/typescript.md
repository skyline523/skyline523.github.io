---
outline: deep
date: 2023-12-04
---

# typescript 知识点和工具

为了防止忘记 ts 的知识点以及方便开发的自定义工具，在此记录。

## 类型演算

### 实现 Optional 工具

```ts
interface Article {
  title: string
  content: string
  author: string
  date: Date
  readCount: number
}

/**
 * 现在有个需求：定义一个方法，需要传入一个article，但是只需要title和content必传
 * 那应该怎么定义这个方法的入参的类型
 */

// 你可能会这么做
type ArticleOptions = {
  title: string
  content: string
  author?: string
  date?: Date
  readCount?: number
}

/**
 * solution
 * 这个Optional可以上升到全局方法再各个需求场景使用
 */
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type ArticleOptions = Optional<Article, 'author' | 'date' | 'readCount'>
```

::: tip

- `&` 交叉类型，取交集
- `Omit<>` 缺省，除去某个类型的某些字段
- `Pick<>` 顾名思义，获取某个类型的某些字段
- `Partial<>` 将某个类型的所有字段变成可选字段

:::
