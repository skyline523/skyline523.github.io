---
outline: deep
date: 2024-01-19
---

# 其他踩坑记录

用于记录不好分类的踩坑记录

## stylelint v15

今天按照我自己文章[统一代码风格和规范项目代码](/workflow/code-and-style-standard#stylelint)搭建项目时，走到配置 stylelint 这步时出现了问题:

1. 按照步骤安装了 stylelint 和一系列相关依赖
2. 新建了`stylelintrc.cjs`等文件
3. 添加`script`脚本命令`"lint:stylelint": "stylelint \"./**/*.{css,less,scss,vue,html}\" --fix"`
4. 运行脚本命令

然后就发现了报错:

<ZoomImg
  src="/assets/notes/pit/others/terminal_stylelint.png"
  desc="运行相关命令后的报错"
/>

一系列的 unknown...

原因是我安装了的`stylelint`v15 以上的版本，stylelint 的 github issues 中已经有提出到这个[bug](https://github.com/prettier/stylelint-config-prettier/issues/140)并且已经关闭了，原因就是 v15 已经废弃了`"stylelint-config-prettier"`

原文: 从 Stylelint v15 开始，所有与样式相关的规则已被弃用。如果您使用的是 v15 或更高版本并且不使用这些已弃用的规则，则不再需要此插件。

所以删掉这行代码重启 IDE 即可:

```js
// stylelintrc.cjs
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier', // [!code --]
    'stylelint-config-recommended-scss',
    'stylelint-config-standard-vue'
  ]
}
```
