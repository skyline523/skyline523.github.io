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

### 依赖配置

我们的项目可能会依赖其他多个外部依赖包，根据依赖包的不同途径可分为以下几个:

- dependencies
- devDependencies
- peerDependencies
- bundleDependencies
- optionalDependencies

#### 配置规则

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

#### `dependencies`

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

#### `devDependencies`

`devDependencies`字段指定了项目开发所需依赖的模块。有一些包有可能你只是在开发环境中用到，例如你用于检测代码规范的 `​eslint​​`​ ,用于进行测试的 ​`​vitest`。用户不安装这些依赖也能正常运行项目。​ 安装依赖是使用`--save-dev`或`-D`参数可将该模块写入到 dependencies 属性

```json
"devDependencies": {
  "eslint": "^8.56.0",
  "vitest": "latest"
}
```

#### `peerDependencies` ~new

当我们开发一个模块的时候，如果当前模块与所依赖的模块同时依赖一个第三方模块，并且依赖的是两个不兼容的版本时就会出现问题。`peerDependencies`用于指定你正在开发的模块所依赖的版本以及用户安装的依赖包版本的兼容性。这部分虽然平时开发项目不常用，但开发需要发布的 npm 包可能需要用上，而且并不太好理解。

它的几个作用点：

- 插件正确运行的前提是，核心依赖库必须先下载安装，不能脱离核心依赖库而被单独依赖并引用
- 插件入口 api 的设计必须要符合核心依赖库的规范
- 插件的核心逻辑运行在依赖库的调用中
- 在项目实践中，同一插件体系下，核心依赖库版本最好是相同的

假设现在有一个`工程A`，已经在其`package.json`的`dependencies`中声明了`packageA`， 有两个插件`插件1`和`插件2`他们也依赖`packageA`，如果在插件中使用`dependencies`而不是`peerDependencies`来声明`packageA`，那么在安装完依赖后的依赖图是这样的：

```
├── 工程A
│   └── node_modules
│       ├── packageA
│       ├── 插件1
│       │   └── nodule_modules
│       │       └── packageA
│       └── 插件2
│       │   └── nodule_modules
│       │       └── packageA
```

显而易见，`packageA`安装了三次，有两次安装是冗余的。

如果使用`peerDependencies`来声明`插件1`和`插件2`的依赖:

```json
{
  "peerDependencies": {
    "packageA": "1.0.1"
  }
}
```

那么在安装完依赖后的依赖图是这样的：

```
├── 工程A
│   └── node_modules
│       ├── packageA
│       ├── 插件1
│       └── 插件2
```

- 如果用户显式依赖了核心库，则可以忽略各插件的 `peerDependency` 声明
- 如果用户没有显式依赖核心库，则按照插件 `peerDependencies` 中声明的版本将库安装到项目根目录中
- 当用户依赖的版本、各插件依赖的版本之间不相互兼容，会报错让用户自行修复

#### `optionalDependencies` ~new

在某些场景下，依赖包可能不是强依赖，这个依赖包可有可无，当这个依赖包无法被获取时，你希望`npm install`继续运行，而不会导致失败，你可以将依赖放到`optionalDependencies`中。

::: tip
`optionalDependencies`中的配置将会覆盖掉`dependencies`，所以只需在一个地方进行配置

引用了`optionalDependencies`中安装的依赖时，需要做好异常处理，否者在模块获取不到时会报错
:::

#### `bundledDependencies` ~new

`​bundledDependencies`​​ 的值是一个数组，数组里可以指定一些模块，这些模块将在这个包发布时被一起打包。

```json
"bundledDependencies": ["package1" , "package2"]
```

### 协议 ~new

```json
{
  "license": "MIT"
}
```

`license`​ 字段用于指定软件的开源协议，开源协议里面详尽表述了其他人获得你代码后拥有的权利，可以对你的的代码进行何种操作，何种操作又是被禁止的。同一款协议有很多变种，协议太宽松会导致作者丧失对作品的很多权利，太严格又不便于使用者使用及作品的传播，所以开源作者要考虑自己对作品想保留哪些权利，放开哪些限制。

> 软件协议可分为开源和商业两类，对于商业协议，或者叫法律声明、许可协议，每个软件会有自己的一套行文，由软件作者或专门律师撰写，对于大多数人来说不必自己花时间和精力去写繁长的许可协议，选择一份广为流传的开源协议就是个不错的选择。

- `MIT` 只要用户在项目副本中包含了版权声明和许可声明，他们就可以拿你的代码做任何想做的事情，你也无需承担任何责任
- `Apache` 类似于 ​`​MIT​`​，同时还包含了贡献者向用户提供专利授权相关的条款
- `GPL` 修改项目代码的用户再次分发源码或二进制代码时，必须公布他的相关修改

### 目录、文件相关 ~new

#### `main`

```json
{
  "main": "lib/index.js"
}
```

`main`可以指定程序的主入口文件，例如`element-plus`的模块入口是`lib/index.js`，当我们引入`import { el-button } from 'element-plus`，实际上就是`lib/index.js`中暴露出去的模块。

#### `bin`

许多`package`都有一个或多个可执行文件，它们希望将其安装到 `PATH` 中。npm 使这变得非常简单（事实上，它使用此功能来安装“npm”可执行文件。）

要使用它，请在 `package.json` 中提供一个 `bin` 字段，它是命令名到本地文件名的映射。当此软件包全局安装时，该文件将链接到全局 bins 目录内，或者将创建一个 cmd（Windows 命令文件）来执行 `bin` 字段中的指定文件，因此可以按`name`或`name.cmd`（在 Windows PowerShell 上）运行。当此包作为另一个包中的依赖项安装时，该文件将被链接到该包可以直接通过 `npm exec` 或通过 `npm run-script` 调用其他脚本时通过名称来访问该文件。

```json
{
  "bin": {
    "myapp": "./cli.js"
  }
}
```

因此，当您安装 myapp 时，如果是类 Unix 操作系统，它将创建一个从 cli.js 脚本到 `/usr/local/bin/myapp` 的符号链接，如果是 Windows，它将创建一个 cmd 文件，通常位于 `C:\Users\{username}\AppData\Roaming\npm\myapp.cmd` 运行 cli.js 脚本。

如果您有一个可执行文件，并且其名称应该是包的名称，那么您可以将其作为字符串提供。例如：

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program"
}

// 等同于
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "./path/to/program"
  }
}
```

请确保 `bin` 中引用的文件以 `#!/usr/bin/env` 节点开头，否则脚本将在没有节点可执行文件的情况下启动！

#### `files`

```json
{
  "files": ["dist", "lib", "es"]
}
```

可选`files`字段是一个数组，描述当您的包作为依赖项`​npm publish`推送到`npm`服务器文件列表。`files`遵循与 .gitignore 类似的语法，但相反：包含文件、目录或 glob 模式（_、\*\*/_ 等）将使文件在打包时包含在 tarball 中。省略该字段将使其默认为 ["*"]，这意味着它将包含所有文件。

一些特殊的文件和目录也会被包含或排除，无论它们是否存在于文件数组中（见下文）。

您还可以在包的根目录或子目录中提供 .npmignore 文件，这将防止包含文件。在包的根目录中，它不会覆盖“文件”字段，但在子目录中它会覆盖。 .npmignore 文件的工作方式与 .gitignore 类似。如果存在 .gitignore 文件，并且缺少 .npmignore，则将使用 .gitignore 的内容。

始终包含的文件:

- `package.json`
- `README`
- `LICENSE` / `LICENCE`
- The file in the "main" field
- The file(s) in the "bin" field

始终不包含的文件:

- \*.orig
- .\*.swp
- .DS_Store
- .\_\*
- .git
- .npmrc
- .hg
- .lock-wscript
- .npmrc
- .svn
- .wafpickle-N
- CVS
- config.gypi
- node_modules
- npm-debug.log
- package-lock.json (如果你希望发布，请使用`npm-shrinkwrap.json`)
- pnpm-lock.yaml
- yarn.lock

#### `man`

`​​man​​​` 命令是 ​​Linux​​​ 下的帮助指令，通过 `​​man​​​` 指令可以查看 ​​Linux​​ 中的指令帮助、配置文件帮助和编程帮助等信息。

> 这个配置在通常开发下使用较少，不过多赘述，可以前往 [npm pacakge.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#man) 查看文档

#### `directories`

CommonJS 规范详细介绍了几种使用目录对象指示包结构的方法。如果你查看 npm 的 package.json，你会发现它有 doc、lib 和 man 目录。

将来，这些信息可能会以其他创造性的方式使用。

> 目前作用不大也不过多赘述

### 脚本配置 ~new

#### `scripts`

package.json 文件的`scripts`属性支持许多内置脚本及其预设生命周期事件以及任意脚本。这些都可以通过运行 `npm run-script <stage>` 或简称 `npm run <stage>` 来执行。具有匹配名称的前置和后置命令也将为这些命令运行（例如 premyscript、myscript、postmyscript）。依赖项中的脚本可以使用 `npm explore <pkg> -- npm run <stage>` 运行。

```json
{
  "scripts": {
    "test": "jest --config .jest.js --no-cache",
    "dist": "antd-tools run dist",
    "compile": "antd-tools run compile",
    "build": "npm run compile && npm run dist"
  }
}
```

#### `config`

`​​config​​​` 字段用于配置脚本中使用的环境变量，例如下面的配置，可以在脚本中使用 ​`​process.env.npm_package_config_port​`​ 进行获取。

```json
{
  "config": {
    "port": "8080"
  }
}
```

### 发布配置 ~new

#### `preferGlobal`

如果你的 ​​node.js​​​ 模块主要用于安装到全局的命令行工具，那么该值设置为 `​​true​​` ，当用户将该模块安装到本地时，将得到一个警告。这个配置并不会阻止用户安装，而是会提示用户防止错误使用而引发一些问题。

#### `private`

如果将 ​​private​​​ 属性设置为 ​`​true​`​，npm 将拒绝发布它，这是为了防止一个私有模块被无意间发布出去。

#### `publishConfig`

发布模块时更详细的配置，例如你可以配置只发布某个 ​`​tag`​​​、配置发布到的私有 `​​npm​​​` 源。更详细的配置可以参考 [​npm-config​](https://docs.npmjs.com/cli/v10/using-npm/config)

#### `os`

假如你开发了一个模块，只能跑在 `​​darwin​​​` 系统下，你需要保证 `​​windows​​` 用户不会安装到你的模块，从而避免发生不必要的错误。

使用 `​​os​​` 属性可以帮助你完成以上的需求，你可以指定你的模块只能被安装在某些系统下，或者指定一个不能安装的系统黑名单：

```json
"os" : [ "darwin", "linux" ]
"os" : [ "!win32" ]
```

> 在 node 环境下可以使用 process.platform 来判断操作系统

#### `cpu`

和上面的 `​​os​​​` 类似，我们可以用 `​​cpu​​` 属性更精准的限制用户安装环境：

```json
"cpu" : [ "x64", "ia32" ]
"cpu" : [ "!arm", "!mips" ]
```

> 在 node 环境下可以使用 process.arch 来判断 cpu 架构

## 包版本管理机制 ~new

`nodejs`离不开`npm`优秀的依赖管理系统。在介绍整个依赖系统之前，必须要了解 npm 如何管理依赖包的版本。

### 查看 npm 包版本

- `npm view <pkg> version`查看`<pkg>`的最新版本
- `npm view <pkg> versions`查看`<pkg>`在 npm 服务器上所有发布过的版本
- `npm ls`查看当前仓库依赖树上所有包的版本信息

### SemVer 规范

npm 包中的模块版本都需要遵循`SemVer`规范，是由`Github`起草的一个具有指定意义的，统一的版本号表示规则。（Sem[antic] Ver[sion]）语义化版本的缩写。

> 详细规范请查看[SemVer 规范官网](https://semver.org/)

#### 标准版本

`SemVer`规范的标准版本号采用`x.y.z`的格式，每位都是非负的整数，且禁止在数字前方补零。

- `x`: 主版本号(major)，当你做了不兼容的 API 修改
- `y`: 次版本号(minor)，当你做了向下兼容的功能新新增
- `z`: 修订号(patch)，当你做了向下兼容的问题修正

#### 先行版本

当某个版本改动比较大，并非稳定且可能无法满足预期的兼容性需求时，你可能要先发布一个现行版本。

现行版本号可以加到标准版本号的后面，先加上一个连接号再加上一连串以句点分割的标识符和版本编译信息。

比如`vitepress`的版本号：

<ZoomImg
  src="/assets/articles/engineering/vitepress_versions.png"
  desc="vitepress部分版本号"
/>

能看出常用的关键字:

- `alpha`内部版本
- `draft`草稿版本
- `beta`公测版本
- `rc(release candidate)`正式版本的候选版本

#### 发布版本

在修改`npm`包某些功能后通常需要发布一个新的版本，我们通常的做法就是直接修改`package.json`到指定版本。如果操作失误，很容易造成版本号混乱，我们可以借助符合`SemVer`规范的命令来完成这一操作:

- `npm version patch`: 升级修订版本号
- `npm version minor`: 升级次版本号
- `npm version major`: 升级主版本号

### 版本工具使用

如果需要对一些版本号的操作，如果这些版本号符合`SemVer`规范，我们可以借助`semver`包来帮助我们进行一些操作

> npm 也使用了该工具来处理版本相关的工作

```shell
npm install semver
```

其用法可以查看文档 [node-semver](https://github.com/npm/node-semver)

### 依赖版本管理

你能看懂下面这些依赖版本的关系吗？

```json
"dependencies": {
  "@bassist/utils": "^0.14.0"
},
"devDependencies": {
  "@mdit-vue/shared": "^1.0.0",
  "@types/node": "^20.9.0",
  "feed": "^4.2.2",
  "medium-zoom": "^1.0.8",
  "sass": "^1.69.5",
  "vitepress": "1.0.0-rc.25",
  "vue": "^3.3.8"
}
```

除了上面三种版本的写法还包含另外一种写法: `*`。

- 固定版本号: `只有版本号`
- 任意版本: `*`
- 匹配主要版本: `^`
  > `x.y.z`，只保持主版本号`x`不变，`y`和`z`保持最新版本
- 匹配主要版本和次要版本: `~`
  > `x.y.z`，只保持修订版本号`z`为最新版本，`y`和`z`保持不变

::: tip
当主版本号为`0`的情况，会被认定为不稳定版本，情况有所不同:

- 主版本号和次版本号都为`0`: `~0.0.z`, `^0.0.z`都会被当作固定版本，安装依赖时均不会发生改变
- 主版本号为`0`: `^0.y.z`表现和`~0.y.z`相同，只保持修订号为最新版本

:::

### 锁定依赖版本

<br />

#### `package-lock.json`

> 项目中使用其他包管理器，`lock`文件和文件后缀会有所不同，但都是以`lock`结尾的文件。

实际开发中，经常会因为各种依赖不一致而产生奇怪的问题，或在某些场景下，不希望依赖被更新，建议在开发中使用`package-lock.json`。

锁定依赖版本意味着在我们不动手执行更新的情况下，每次安装依赖都会安装固定版本。保证整个团队使用版本号一致的依赖。

每次安装固定版本，无需计算依赖版本范围，大部分场景下能大大加速依赖安装时间。

> 使用 package-lock.json 要确保 npm 的版本在 5.6 以上，因为在 5.0 - 5.6 中间，对 package-lock.json 的处理逻辑进行过几次更新，5.6 版本后处理逻辑逐渐稳定。

#### 定期更新依赖

我们的目的是保证团队中使用的依赖一致或者稳定，而不是永远不去更新这些依赖。实际开发场景中，我们虽然不需要每次都去安装新版本，但仍然需要定时去升级依赖版本，来让我们享受依赖包升级带来的问题修复、性能提升、新特新更新等。

<ZoomImg
  src="/assets/articles/engineering/npm-outdated.png"
  desc="npm outdated查看依赖需要更新的列表"
/>

`npm outdated` 可以帮助列出有哪些没有升级到最新版本的依赖:

- 黄色表示不符合我们指定的语意化版本范围 - 不需要升级
- 红色表示符合指定的语意化版本范围 - 需要升级

`npm update`会升级所有红色依赖

::: tip
当你的项目选择了其他包管理器时，对应的命令也可能会改变，比如`pnpm`使用的升级依赖为`pnpm up`。不知道其他包管理器对应的命令时，请上对应官方文档查看。
:::

### 依赖版本选择的最佳实践

<br />

#### 版本发布

- 对外发布一个正式版本的 npm 包时，把它的版本标为`1.0.0`
- 某个包版本发行后，任何修改都必须以新版本发行
- 版本号严格按照`主版本.此版本.修订号`格式
- 版本号发布必须时严格递增的
- 发布重大版本或版本改动较大时，先发布`alpha\beta\rc`等先行版本

<br />

#### 依赖范围选择

- 主工程依赖了很多子模块，都是团队成员开发的`npm`包，此时建议把版本前缀改为`~`，如果锁定的话每次子依赖更新都要对主工程的依赖进行升级，非常繁琐，如果对子依赖完全信任，直接开启`^`每次升级到最新版本
- 主工程跑在`docker`线上，本地还在进行子依赖开发和升级，在`docker`版本发布前要锁定所有依赖版本，确保本地子依赖发布后线上不会出问题

<br />

#### 保持依赖一致

- 确保`npm`的版本在`5.6`以上，确保默认开启 `package-lock.json` 文件
- 由初始化成员执行 `npm inatall` 后，将 `package-lock.json` 提交到远程仓库。不要直接提交 `node_modules` 到远程仓库
- 定期执行 `npm update` 升级依赖，并提交 `lock` 文件确保其他成员同步更新依赖，不要手动更改 `lock` 文件

#### 依赖变更

- 升级依赖: 修改 `package.json` 文件的依赖版本，执行 `npm install`
- 降级依赖: 直接执行 `npm install package@version`(改动`package.json`不会对依赖进行降级)
- 注意改动依赖后提交`lock`文件

## 参考

[package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)  
[前端工程化 - 剖析 npm 的包管理机制](https://blog.51cto.com/u_15707676/5714424)  
[一文搞懂 peerDependencies](https://segmentfault.com/a/1190000022435060)
