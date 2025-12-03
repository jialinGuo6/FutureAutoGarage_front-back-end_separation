# FutureAutoGarage 🚗

**English** | [中文](#中文版本)

## Project Overview

FutureAutoGarage is a modern automotive service website built with **Django REST API + Vite React** architecture, providing tire sales, auto repairs, and car maintenance services.

### 🛠 Tech Stack
- **Backend**: Django 5.2 + Django REST Framework + SQLite3
- **Frontend**: React 19 + Vite + Material-UI + Ant Design
- **Architecture**: Frontend-Backend Separation (SPA)

### 📁 Project Structure
```
FutureAutoGarage/
├── auto_garage/                 # Django Backend
│   ├── api/                    # REST API Application
│   ├── auto_garage_project/    # Django Settings
│   ├── media/                  # User Uploaded Files
│   └── manage.py              # Django Management
├── frontend-vite/              # Vite React Frontend
│   ├── src/                    # Source Code
│   ├── public/                 # Static Assets
│   └── dist/                   # Build Output (Production)
├── logs/                       # Server Logs
├── start_dev.sh               # Development Startup Script
├── stop_dev.sh                # Development Stop Script
├── deploy_prod.sh             # Production Deployment Script
├── start_prod.sh              # Production Start Script
├── stop_prod.sh               # Production Stop Script
├── update_frontend.sh         # Frontend Update Script
├── update_backend.sh          # Backend Update Script
├── rollback_prod.sh           # Production Rollback Script

└── README.md                  # This File
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Development Setup

1. **Clone Repository**
```bash
git clone <repository-url>
cd FutureAutoGarage
```

2. **Backend Setup**
```bash
cd auto_garage
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

3. **Frontend Setup**
```bash
cd frontend-vite
npm install
```

4. **Start Development Servers**
```bash
# Use startup script (recommended)
./start_dev.sh

# Or start separately
cd auto_garage && python manage.py runserver --settings=auto_garage_project.settings.dev &
cd frontend-vite && npm run dev
```

### 🌐 Access URLs
- **Frontend**: http://localhost:3000
- **API**: http://localhost:8000/api/
- **Admin Panel**: http://localhost:8000/admin/

## 📊 Features

### Frontend Pages
- **Home**: Company introduction and services overview
- **Tires**: All-season and winter tire catalog with dynamic filtering
- **Services**: Auto repairs and car maintenance information
- **Products**: LED headlights and rear view systems
- **About**: Company information and contact details
- **FAQ**: Frequently asked questions

### Backend API
- **Tire Management**: CRUD operations for tire inventory
- **Image Management**: Dynamic tire image uploads and retrieval
- **Admin Interface**: Content management system

## 🔧 Development

### Environment Configuration
- **Development**: `.env.development`
- **Production**: `.env.production`

### Build Commands
```bash
# Development
npm run dev

# Production Build
npm run build:prod

# Preview Production Build
npm run preview
```

## 📦 Production Deployment

### Server Requirements
- **Web Server**: Nginx (recommended)
- **WSGI Server**: Gunicorn
- **Database**: SQLite3 (dev) / PostgreSQL (prod)
- **Process Manager**: systemd or PM2

### Initial Deployment (Aliyun Server)
```bash
# 1. Create project directory
cd /home
mkdir FutureAutoGarage
cd FutureAutoGarage

# 2. Install dependencies，if do not have
# Install Python, (Node.js, Nginx) if not used /dist for frontend drectly, etc.
sudo apt update
sudo apt install python3 python3-pip python3-venv nginx

# 3. Create virtual environment
python3 -m venv venv
source venv/bin/activate

# 4. Create and configure environment file
# Copy .env content from your local project
vim .env

# 5. Create update script
# Copy update_frontend.sh content from https://github.com/jialinGuo6/FutureAutoGarage_front-back-end_separation.git
vim update_frontend.sh
chmod +x update_frontend.sh

# 6. Get project code
./update_frontend.sh

# 7. Deploy
./deploy_prod.sh

# 8. Start services
./start_prod.sh
```

### Update Workflow
```bash
# Update frontend only (from local build)
./update_frontend.sh

# Update backend only
./update_backend.sh

# Rollback if needed
./rollback_prod.sh backup_20241129_123456
```

### Service Management
```bash
# Start production services
./start_prod.sh

# Stop production services
./stop_prod.sh

# View logs
tail -f logs/gunicorn_access.log
tail -f logs/gunicorn_error.log
```
## Tire Data
- **winterTire**:
https://docs.google.com/spreadsheets/d/1msRHnS3gKHN1IGNTzDeuursyrTKF4PXoWn_v9cnD-2U/edit?gid=1660833820#gid=1660833820
- **allSeasonTire**:
https://docs.google.com/spreadsheets/d/1K270MJUMYaFQhxAvObNoWePWZf6qRWBvpKeA53lMQ-M/edit?gid=1206133292#gid=1206133292

## 📞 Contact

- **Facebook**: https://www.facebook.com/NAPASJ/
- **Project Size**: ~16MB
- **Upload Date**: November 2024

---

# 中文版本

## 项目概述

FutureAutoGarage 是一个现代化的汽车服务网站，采用 **Django REST API + Vite React** 架构，提供轮胎销售、汽车维修和保养服务。

### 🛠 技术栈
- **后端**: Django 5.2 + Django REST Framework + SQLite3
- **前端**: React 19 + Vite + Material-UI + Ant Design
- **架构**: 前后端分离 (SPA)

### 📁 项目结构
```
FutureAutoGarage/
├── auto_garage/                 # Django 后端
│   ├── api/                    # REST API 应用
│   ├── auto_garage_project/    # Django 配置
│   ├── media/                  # 用户上传文件
│   └── manage.py              # Django 管理
├── frontend-vite/              # Vite React 前端
│   ├── src/                    # 源代码
│   ├── public/                 # 静态资源
│   └── dist/                   # 构建输出（生产环境）
├── logs/                       # 服务器日志
├── start_dev.sh               # 开发启动脚本
├── stop_dev.sh                # 开发停止脚本
├── deploy_prod.sh             # 生产环境部署脚本
├── start_prod.sh              # 生产环境启动脚本
├── stop_prod.sh               # 生产环境停止脚本
├── update_frontend.sh         # 前端更新脚本
├── update_backend.sh          # 后端更新脚本
├── rollback_prod.sh           # 生产环境回滚脚本
└── README.md                  # 说明文件
```

## 🚀 快速开始

### 环境要求
- Python 3.8+
- Node.js 16+
- npm 或 yarn

### 开发环境搭建

1. **克隆仓库**
```bash
git clone <repository-url>
cd FutureAutoGarage
```

2. **后端设置**
```bash
cd auto_garage
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

3. **前端设置**
```bash
cd frontend-vite
npm install
```

4. **启动开发服务器**
```bash
# 使用启动脚本（推荐）
./start_dev.sh

# 或分别启动
cd auto_garage && python manage.py runserver --settings=auto_garage_project.settings.dev &
cd frontend-vite && npm run dev
```

### 🌐 访问地址
- **前端**: http://localhost:3000
- **API**: http://localhost:8000/api/
- **管理后台**: http://localhost:8000/admin/

## 📊 功能特性

### 前端页面
- **首页**: 公司介绍和服务概览
- **轮胎**: 全季和冬季轮胎目录，支持动态筛选
- **服务**: 汽车维修和保养信息
- **产品**: LED 车灯和后视系统
- **关于**: 公司信息和联系方式
- **FAQ**: 常见问题解答

### 后端 API
- **轮胎管理**: 轮胎库存的增删改查操作
- **图片管理**: 动态轮胎图片上传和检索
- **管理界面**: 内容管理系统

## 🔧 开发

### 环境配置
- **开发环境**: `.env.development`
- **生产环境**: `.env.production`

### 构建命令
```bash
# 开发模式
npm run dev

# 生产构建
npm run build:prod

# 预览生产构建
npm run preview
```

## 📦 生产环境部署

### 服务器要求
- **Web 服务器**: Nginx（推荐）
- **WSGI 服务器**: Gunicorn
- **数据库**: SQLite3（开发）/ PostgreSQL（生产）
- **进程管理**: systemd 或 PM2

### 初始部署（阿里云服务器）
```bash
# 1. 创建项目目录
cd /home
mkdir FutureAutoGarage
cd FutureAutoGarage

# 2. 安装依赖工具, 如果没有的话
# 安装 Python、(Node.js、Nginx)如果不是直接上传/dist目录而是React代码 等, 
sudo apt update
sudo apt install python3 python3-pip python3-venv nginx

# 3. 创建虚拟环境
python3 -m venv venv
source venv/bin/activate

# 4. 创建并配置环境文件
# 从本地项目复制 .env 内容
vim .env

# 5. 创建更新脚本
# 从git线上项目复制 update_frontend.sh 内容
vim update_frontend.sh
chmod +x update_frontend.sh

# 6. 获取项目代码
./update_frontend.sh

# 7. 执行部署
./deploy_prod.sh

# 8. 启动服务
./start_prod.sh
```

### 更新流程
```bash
# 只更新前端（从本地构建）
./update_frontend.sh

# 只更新后端
./update_backend.sh

# 如需回滚
./rollback_prod.sh backup_20241129_123456
```

### 服务管理
```bash
# 启动生产服务
./start_prod.sh

# 停止生产服务
./stop_prod.sh

# 查看日志
tail -f logs/gunicorn_access.log
tail -f logs/gunicorn_error.log
```

## 📞 联系方式

- **Facebook**: https://www.facebook.com/NAPASJ/
- **项目大小**: ~16MB
- **上传日期**: 2024年11月