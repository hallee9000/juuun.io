#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
echo 'juuun.io\nwww.juuun.io' > CNAME


git init
git add -A
git commit -m '由本地发布'

# 如果发布到 CODING Pages
git push -f git@github.com:leadream/juuust.git master:gh-pages

cd -