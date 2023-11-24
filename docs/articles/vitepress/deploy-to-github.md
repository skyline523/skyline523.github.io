---
outline: deep
---

# VitePress 项目部署到 Github Pages

## 创建 VitePress 项目

先进入[VitePress 官网](https://vitepress.dev/guide/getting-started)按照文档的 Getting Started 步骤创建一个新项目

## 部署 Github Pages

### 创建仓库

需要创建两个仓库：

1. 你的项目的源代码仓库(仓库名随便取)
2. 你的项目打包后`docs:build`后的 dist 文件夹内容(这个仓库名需按照`[github username].github.io`这个格式)

### 配置仓库选项

- 打开仓库设置

<ZoomImg src='/assets/articles/vitepress/github-repo.png' desc='仓库设置' />

- 一般使用默认设置即可，可能分支需要切换，以及如果自己有域名可以填上。

<ZoomImg src='/assets/articles/vitepress/repo-setting.png' desc='仓库设置' />

正常情况下等待几分钟，就部署好了。[skyline523.github.io/](https://skyline523.github.io/)

## 记录

刚刚照着[别人的文章](https://juejin.cn/post/7139818261704605733)按步骤部署就踩进一个坑了...

就是`docs:build`后的 dist 文件夹，我把整个文件夹给推到仓库了，应该是把 dist 里面的所有内容放到仓库，dist 文件夹要除外，只需要里面的内容。手动狗头一下。
