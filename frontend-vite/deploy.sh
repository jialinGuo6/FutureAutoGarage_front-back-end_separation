#!/bin/bash

# 前端部署脚本

echo "构建生产版本..."
npm run build:prod

echo "构建完成，文件在 dist/ 目录"
echo "可以部署到 Nginx、Apache 或其他静态文件服务器"