#!/bin/bash

echo "🔄 更新后端代码..."

# 项目根目录
PROJECT_DIR="/var/www/FutureAutoGarage"
cd $PROJECT_DIR || { echo "❌ 项目目录不存在"; exit 1; }

# 备份当前后端
BACKUP_DIR="backend_backup_$(date +%Y%m%d_%H%M%S)"
echo "📦 备份当前后端到 $BACKUP_DIR ..."
mkdir -p $BACKUP_DIR
cp -r auto_garage $BACKUP_DIR/

# 停止后端服务
echo "🛑 停止后端服务..."
./stop_prod.sh

# 拉取最新后端代码
echo "📥 拉取最新后端代码..."
git fetch origin
git pull origin main

if [ $? -ne 0 ]; then
    echo "❌ 后端代码拉取失败，恢复备份..."
    rm -rf auto_garage
    cp -r $BACKUP_DIR/auto_garage ./
    echo "🔄 后端备份已恢复"
    exit 1
fi

# 更新依赖
echo "📦 更新后端依赖..."
cd auto_garage

# 检查虚拟环境
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "⚠️  警告: 建议在虚拟环境中运行"
    echo "   请先执行: source venv/bin/activate"
fi

# 安装依赖
pip install -r requirements.txt

# 数据库迁移
python manage.py migrate --settings=auto_garage_project.settings.prod

# 收集静态文件
python manage.py collectstatic --noinput --settings=auto_garage_project.settings.prod

cd ..

# 重新启动服务
echo "🚀 重新启动后端服务..."
./start_prod.sh

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 后端更新完成!"
    echo "   - 备份位置: $BACKUP_DIR"
    echo "   - API: http://your-domain.com/api/"
else
    echo "❌ 后端启动失败，恢复备份..."
    rm -rf auto_garage
    cp -r $BACKUP_DIR/auto_garage ./
    ./start_prod.sh
    echo "🔄 已回滚到备份版本"
    exit 1
fi