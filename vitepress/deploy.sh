#!/bin/bash

# 进入要推送的文件夹
cd docs/.vitepress/dist

# 初始化新的Git仓库
git init

# 添加要推送的文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程Git存储库
git remote add origin https://github.com/undercurre/Marvels-Dosc.git

# 推送更改
git push -u origin master
