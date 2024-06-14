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

## commit 报错

使用`git-cz`来提交项目代码时，执行`pnpm commit`后会出现报错:

<ZoomImg
  src="/assets/notes/pit/others/commit_bug.png"
  desc="运行pnpm commit的报错"
/>

将`.commitlintrc.cjs`的编码改成 utf-8 即可。

## eslint 报错

有可能在项目中碰到下面这种情况:

<ZoomImg src="/assets/notes/pit/others/eslint_bug_1.png" desc=".vue文件报错Parsing error: Unexpected token <" />

<ZoomImg src="/assets/notes/pit/others/eslint_bug_2.png" desc=".ts文件报错Parsing error: The keyword 'xxx' is reserved" />

你可能会以为是`eslint`文件的配置有问题，后来发现配置正常；你也可能会以为是`ts.config.json`配置有问题，后来发现配置也是正常的。

其实问题原因是在于你的`eslint`文件的格式，当你的`eslint`版本大于等于`v8.21`时，且文件格式为`eslint.config.js`就会出现这种问题，这时候只需要打开 vscode 的一项配置即可:

<ZoomImg src="/assets/notes/pit/others/eslint_bug_fix.png" desc="vscode eslint config" />

::: tip
另外，可能会以为配置文件改成`.eslintrc.js`就可以了，这样确实没错，但是要注意的是官方将在 v9 版本中废弃这种格式。
https://zh-hans.eslint.org/docs/latest/use/configure/configuration-files
:::

## 新版 Volar(vue-official)

这个 bug 应该会在后期修复，记录下我当时碰到的时间点(2024-03-21)。

最近打开 vscode 会有提示说`volar`已经废弃，建议使用新插件`Vue-official`，更新之后，会发现很多项目都会报错无法识别导入的文件、和方法啥的。这在仓库 issues 中也有提出各种各样的 bug。应该就是新的插件还不稳定，这只能等官方修复了。

但是项目一直爆红那也没办法开发了，那怎么办呢？亲测把插件降级到`v1.8.27`版本能解决这个问题。但是有时候还是不生效，需要频繁来回切换版本才能解决。

## Safari 上音频播放显示错误 ~new

这个问题是由于你加载的文件类型错误的原因，可以看看 network 中文件请求的 response type 是不是`application/json`或者`application/octet-stream`等，要确保加载的音频为`audio/xxx`,在 Safari 上才能播放正确。请找你的后端帮你处理成音频类型返回吧。

## Safari 网页遮挡 ~new

在 Safari 浏览器中网页会被遮挡底部或顶部。

<ZoomImg src="/assets/notes/pit/others/mobiles_height.png" desc="移动端浏览器" />

不管是新的还是就的 ios，它们的 safari 浏览器的屏幕高度(screen height)都是包括了工具栏和地址栏的。就是图中括起来的部分，可以看到网页会被地址栏工具栏遮挡掉一部分，而且上下滑动也无法解决。而安卓的屏幕高度并不会包括工具栏地址栏。

所以，尽量避免给标签设置`100vh`单位的高度，这将会导致网页在 safari 浏览器被遮挡一部分。

::: tip
当然你也可以通过给标签设置`padding`或`margin`让页面被遮挡部分留空，但是这并不是一个好的办法。
:::
