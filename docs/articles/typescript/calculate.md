---
outline: deep
date: 2023-12-04
---

# TypeScript 类型验算

## 实现 Optional

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

## 从字段到函数的推导 ~new

```ts
/**
 * 现在要实现一个方法watch，内部有个方法on，用于监听传入的对象中指定的值
 * on包含监听值和回调函数，如何定义watch才能实现监听值能与回调函数中的参数对应起来呢？
 * tip：监听指格式永远都是 val+Changed 的格式
 */

const personWatcher = watch({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26
})

personWatcher.on('ageChanged', (oldVal, newVal) => {})

type Watcher = {
  on(
    eventName: string,
    callback: (oldVal: any, newVal: any) => void
  ): void
}

declare function watch(obj: object) => Watcher
```

这种写法自然是不会出现报错，但是这也没有起到约束作用，很明显这样的类型标注是不合格的。

```ts
type Watcher<T> = {
  on<K extends string & keyof T>(
    eventName: `${K}Changed`,
    callback: (oldVal: T[K], newVal: T[K]) => void
  ): void
}

declare function watch<T>(obj: T) => Watcher<T>
```

## 使用 infer 封装通用类型工具 ~new

```ts
type sum = (a: number, b: number) => number
type concat = (a: any[], b: any[]) => any[]

// 传入一个泛型函数，拿到这个函数的返回结果
let sumResult: Return<sum> // number
let concatResult: Return<cancat> // any[]

type Return<T> = T extends (...args: any[]) => infer R ? R : T
```

```ts
type pt = PromiseType<Promise<string>> // string

type PromiseType<T> = T extends Promise<infer K> ? K : T
// type PromiseType<T> = T extends Promise<infer K> ? PromiseType<K> : T
```

```ts
type ItemType1 = ArrayType<[string, number]> // string | number
type ItemType2 = ArrayType<string[]> // string

type ArrayType<T> = T extends Array<infer K> ? K : T
```

## 递归类型推断 ~new

```ts
type Curried<A, R> =
  A extends []
  ? () => R
  : A extends [infer ARG]
  ? ARG
  : A extends (infer ARG, ...infer REST)
  ? (param: ARG) => Curried<REST, R>
  : 'never'

declare function curry<A extends any[], R>(
  fn: (...args: A) => R
): Curried<A, R>

function sum(a: number, b: number, c: number) {
  return a + b + c
}

const currySum = curry(sum)
currySum(1)(2)(3)
```

## 防抖函数类型标注

```ts
function handler(a: number, b: number) {
  return a + b
}

const dHandler = debounce(handler)

// bad
declare function debounce(fn: Function, duration?: number): Function

// or
// bad
declare function debounce<T>(fn: T, duration?: number): T

// good
declare function debounce<A extends any[], R>(
  fn: (...args: A) => R,
  duration?: number
): (...args: A) => void
```
