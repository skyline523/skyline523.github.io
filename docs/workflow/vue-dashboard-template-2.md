---
outline: deep
date: 2023-11-27
---

# Vue Admin 项目框架 - 2

本篇篇是配置对应必要的库和初始化代码。

## 配置别名

### vite.config.ts

```js diff
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // [!code ++]
    }
  }
})
```

::: tip
使用 node 模块时会报错，需要安装依赖`@types/node`  
`pnpm install @types/node -D`
:::

### tsconfig.json

配置别名后我们输入@/后并不会又提示，_因为在 ts 下需要额外配置 tsconfig.json_

<ZoomImg
  src="/assets/workflow/vue-dashboard-template/no-suggestion.png"
  desc="引入未提示"
/>

添加以下代码即可：

```json
{
  "compilerOptions": {
    "baseUrl": "./", // [!code ++]
    "paths": {
      "@/*": ["./src/*"] // [!code ++]
    }
  }
}
```

越写越不想写了，md。先放着不写了，想写的时候再来写。
