---
outline: deep
date: 2023-12-20
---

# 包管理器

现如今创建的项目基本上都是基于`React`，`Vue`。所以必然离不开`npm`这个包管理器，其优秀的包版本管理机制承载了整个繁荣发展的 ​​NodeJS​​ 社区，理解其内部机制非常有利于加深我们对模块开发的理解、各项前端工程化的配置以加快我们排查问题（相信不少同学收到过各种依赖问题的困扰）的速度。

## package.json

在 node.js 中，模块是一个库或者框架，也是一个 node.js 项目。node.js 项目遵循模块化的架构，当我们创建了一个项目，意味着创建了一个模块，而这个模块必须有一个描述文件，即`package.json`。一个合理的`package.json`配置文件能直接决定我们项目的质量。

### 必备属性

`package.json`中有多个属性，其中`name`, `version`是必填的，这两个属性组成一个`npm`模块的唯一标识。

#### npm 包命名规范

`name`在命名时需要遵循官方的规范和建议:

- 包名会成为模块 url、命令行中的参数或者一个文件夹名称，所以非 url 安全的字符都不能使用，我们可以使用`validate-npm-package-name`包来检测名称是否合法
- 语义化，能帮助开发者更快找到包
- 若包名存在一些符号，将符号去除后不得与现有包名重复
  > `react-native`存在即不能创建`reactnative`
- 如果包名和现有的包名太相近导致不能发布，你可以发布到自己的作用域下
  > 比如`leet`, 那么发布的包可以说`@leet/hooks`

#### 查看包是否被占用

控制台执行`npm view [packageName]`可查看包是否被占用，若不存在被占用则会显示`404`。

### 描述信息

<br/>

#### 基本描述

```json
{
  "description": "Some descriptions of the module",
  "keywords": ["component", "design", "framework", "frontend", "react", "ui"]
}
```

基本描述有利于其他人了解你的模块，并且有助于检索模块。当你使用`npm search`时会和 `description` 和 `keywords` 进行匹配。有点类似于`html`的`<meta name="description">`和`<meta name="keyword">`，有利于搜索引擎的检索。

#### 开发人员

包含`author`和`contributors`，字面意思就是作者和贡献者，作者只有一个人，贡献者包含多个人。

```json
// 每个人员信息包含下面三个字段或者时一个字符串描述
{
  "author": {
    "name": "Leet",
    "email": "1414395519@qq.com",
    "url": "https://github.com/skyline523"
  },
  "contributors": [
    "a contributor ......",
    {
      "name": "Leet",
      "email": "1414395519@qq.com",
      "url": "https://github.com/skyline523"
    }
  ]
}
```

#### 地址

```json
{
  // 指定模块的主页
  "homepage": "https://react.dev/",
  // 指定一个地址或邮箱，其他开发者可以向你提问
  "bugs": {
    "url": "https://github.com/facebook/react/issues"
  },
  // 指定模块的代码仓库
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react"
  }
}
```

#### 依赖配置

我们的项目可能会依赖其他多个外部依赖包，根据依赖包的不同途径可分为以下几个:

- dependencies
- devDependencies
- peerDependencies
- bundleDependencies
- optionalDependencies

##### 配置规则

你看到的依赖包配置可能有以下几种情况：

```json
{
  "axios": "^1.2.0",
  "antd": "ant-design/ant-design#4.0.0-alpha.8",
  "test-js": "file:../test",
  "test2-js": "http://cdn.com/test2-js.tar.gz",
  "core-js": "^1.1.5"
}
```

- `NAME:VERSION`
  > `​VERSION`​​​ 是一个遵循[​SemVer​​​ 规范](https://semver.org/lang/zh-CN/)的版本号配置，​​npm install​​ 时将到 npm 服务器下载符合指定版本范围的包
- `NAME:DOWNLOAD_URL`
  > `DOWNLOAD_URL` 是一个可下载的`tarball`压缩包地址，模块安装时会把这个`.tar`安装到本地
- `NAME:LOCAL_PATH`
  > `LOCAL_PATH` 是一个本地的依赖包路径，适用于在本地测试一个 npm 包，但不适用于线上
- `NAME:GITHUB_URL`
  > `GITHUB_URL` 即 ​​github​​​ 的 ​​username/modulename​​​ 的写法，例如：​​ant-design/ant-design​​​，你还可以在后面指定 ​​tag​​​ 和 ​​commit id​
- `NAME:GIT_URL`
  > `GIT_URL` 即通过`git clone [url]`克隆代码的 url

::: tip
`tarball` 是一组打包成单个文件的文件，然后使用 `gzip` 压缩程序进行压缩。

`git clone [url]` 中的 url 遵循以下形式:

```
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]

// eg:
​​git://github.com/user/project.git#commit-ish​​
​​git+ssh://user@hostname:project.git#commit-ish​​
​​git+ssh://user@hostname/project.git#commit-ish​​
​​git+http://user@hostname/project/blah.git#commit-ish​​
​​git+https://user@hostname/project/blah.git#commit-ish​​
```

:::

##### `dependencies`

`dependencies`字段指定了项目运行所需依赖的模块。安装依赖是使用`--save`参数可将该模块写入到 dependencies 属性，安装依赖是默认安装到 dependencies，故可不用添加该参数。

```json
"dependencies": {
  "vite": "^3.3.2"
}
```

::: tip 版本说明
上面有说过版本号是遵循[​SemVer​​​ 规范](https://semver.org/lang/zh-CN/)的，这里还是提出几个常用写法的意思：

- `3.3.2`: 只安装指定版本
- `~3.3.2`: 表示安装 3.3.x 的最新版本
- `^3.3.2`: 表示安装 3.x.x 的最新版本
- `latest`: 表示安装最新版本

:::

##### `devDependencies`

`devDependencies`字段指定了项目开发所需依赖的模块。有一些包有可能你只是在开发环境中用到，例如你用于检测代码规范的 `​eslint​​`​ ,用于进行测试的 ​`​vitest`。用户不安装这些依赖也能正常运行项目。​

```json
"devDependencies": {
  "eslint": "^8.56.0",
  "vitest": "latest"
}
```

##### `peerDependencies`

当我们开发一个模块的时候，如果当前模块与所依赖的模块同时依赖一个第三方模块，并且依赖的是两个不兼容的版本时就会出现问题。`peerDependencies`用于指定你正在开发的模块所依赖的版本以及用户安装的依赖包版本的兼容性。
