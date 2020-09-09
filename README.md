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

    现在你的网站运行在 `http://localhost:8000`!

3.  **部署到 Github Pages**

    部署脚本在 `deploy.sh` 内，请先将里面的仓库地址改为自己的。当你完成开发时，运行 `yarn deploy` 来执行该脚本。它会做两件事：
    - 构建静态文件至 `public` 文件夹
    - 将此文件夹内的文件推送至仓库 `gh-pages` 分支
    完成后，你就可以去 Github 上设置 Pages 了。

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
