## components-lib-demo 项目使用手册

安装依赖

```bash
$ npm i
```

或者

```bash
$ yarn
```

本地启动项目

```bash
$ npm start
```

doc 模式下构建生产环境代码,

```bash
$ npm run docs:build
```

Run test,

```bash
$ npm test
```

通过`father-build`来创建可以发布到 npm 上的包

```bash
$ npm run build
```

发布到 npm 上的命令，首先执行 npm login，然后执行以下命令

```bash
$ npm run release
```

在 github 创建项目后在项目中创建.github/workflows/gh-pages.yml 文件，每次提交代码会自动构建项目自动发布到生产环境

或者直接执行如下命令也可以发布到生产环境

```bash
$ npm run deploy
```
