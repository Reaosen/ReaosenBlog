#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入打包后的 dist 目录
cd docs/.vuepress/dist

# 确保 CNAME 文件存在并复制到打包目录
# 假设项目根目录下有 CNAME 文件
if [ -f "../../../CNAME" ]; then
    cp ../../../CNAME .
else
    echo "error: CNAME file not found."
    exit 1
fi

git init
git add -A
git commit -m 'deploy'

# 配置远程仓库并推送
git branch -m master main
git push -f git@github.com:Reaosen/Reaosen.github.io.git main

# 返回项目根目录
cd ../../..