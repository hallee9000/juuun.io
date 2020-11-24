<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://juuun.io">
    <img alt="Jun" src="./logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Jun 的线上作品集
</h1>

这是我的线上作品集，使用 [Gatsby](https://www.gatsbyjs.org) 构建。线上地址为 [https://juuun.io](https://juuun.io)。

## 🚀 快速开始

如果你想用它来做自己的作品集，按照下面几步操作就可以了。

1.  **Fork 并 Clone 到本地**

    Fork 这个项目，并将代码克隆到本地。

2.  **本地开发**

    进入项目文件夹，安装依赖（假设你已安装 Node.js、Yarn 等）。

    ```sh
    cd juuun.io/
    yarn install
    yarn dev
    ```
    
    **注意：因为引入了图像处理的 Gatsby sharp 插件，在 Mac 下需要手动执行 `brew install libpng` 来安装 libpng 包，否则无法正常编译**

    现在你的网站运行在 `http://localhost:8000`!

3.  **部署到 Github Pages**

    目前使用 [GitHub Actions](https://github.com/features/actions) 自动部署到 GitHub Pages，你需要在 setting 里面添加一个叫做 TOKEN 的 secret。
    自动部署文件：https://github.com/leadream/juuun.io/blob/master/.github/workflows/deployToPages.yml

## 🧐 里面有啥?

本项目文件结构如下：

    .
    ├── node_modules
    ├── content/                        # Markdown 内容
    ├── src/                            # 主目录
        ├── assets/                     # 样式等资源
        ├── components/                 # 组件
        ├── pages/                      # 页面
        ├── templates/                  # 模板
    ├── static/                         # 静态文件
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js                # Gatsby 配置文件
    ├── gatsby-node.js                  # Gatsby 构建处理文件
    ├── app.js
    ├── package-lock.json
    ├── package.json
    ├── deploy.sh                       # 部署脚本
    ├── CNAME
    ├── LICENSE
    └── README.md

## 🎓 学习 Gatsby

Gatsby 是一个帮助你快速构建 React 应用的框架，有丰富的插件可以让你快速实现想法。关于 Gatsby 更多内容及文档请参考其[官方网站](https://www.gatsbyjs.org/)。

- **推荐你先阅读其[系列教程](https://www.gatsbyjs.org/tutorial/)**，他可以带你从零开始逐步学会使用 Gatsby。

- **进阶使用请参考[文档](https://www.gatsbyjs.org/docs/)**。
