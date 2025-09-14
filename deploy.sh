#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入打包后的dist目录
cd docs/.vuepress/dist  # 修正路径到正确的目录

git init
git add -A
git commit -m 'deploy'

# 配置远程仓库并推送
git branch -m master main
git push -f git@github.com:Reaosen/Reaosen.github.io.git main

# 返回项目根目录
cd ../../..



