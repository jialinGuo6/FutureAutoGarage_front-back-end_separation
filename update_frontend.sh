#!/bin/bash

echo "🔄 更新前端生产版本..."

# 项目根目录
PROJECT_DIR="/var/www/FutureAutoGarage"
cd $PROJECT_DIR || { echo "❌ 项目目录不存在"; exit 1; }

# 初始化 git（第一次运行才需要）
if [ ! -d "frontend_repo/.git" ]; then
    echo "⚡ 初始化前端仓库..."
    mkdir -p frontend_repo
    cd frontend_repo
    git init
    git remote add origin https://github.com/jialinGuo6/FutureAutoGarage_front-back-end_separation.git
    git sparse-checkout init --cone
    git sparse-checkout set frontend-vite/dist
    cd ..
fi

# 备份当前 dist（可选）
BACKUP_DIR="dist_backup_$(date +%Y%m%d_%H%M%S)"
if [ -d "frontend-vite/dist" ]; then
    echo "📦 备份当前 dist 到 $BACKUP_DIR ..."
    mkdir -p $BACKUP_DIR
    cp -r frontend-vite/dist $BACKUP_DIR/
fi

# 拉取最新 dist
echo "📥 拉取最新 dist ..."
cd frontend_repo
git pull origin main

if [ $? -ne 0 ]; then
    echo "❌ 拉取失败，请检查 Git 设置"
    exit 1
fi

# 更新到项目目录
rm -rf ../frontend-vite/dist
cp -r frontend-vite/dist ../frontend-vite/

cd ..

echo "🚀 前端生产版本更新完成!"
echo "✅ Nginx 可以直接提供服务: $PROJECT_DIR/frontend-vite/dist"
echo "📦 备份位置: $BACKUP_DIR"