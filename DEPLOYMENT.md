# 🚀 FutureAutoGarage Deployment Guide

## Server Deployment Steps

### 1. Clone Repository
```bash
git clone <your-repository-url>
cd FutureAutoGarage
```

### 2. Backend Setup
```bash
cd auto_garage

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp ../.env.example ../.env
# Edit .env with your production values

# Database setup
python manage.py migrate --settings=auto_garage_project.settings.prod
python manage.py createsuperuser --settings=auto_garage_project.settings.prod
python manage.py collectstatic --settings=auto_garage_project.settings.prod
```

### 3. Frontend Setup
```bash
cd ../frontend-vite

# Install dependencies
npm install

# Build for production
npm run build:prod
```

### 4. Production Environment Variables
Edit `.env` file:
```bash
DJANGO_SECRET_KEY=your-production-secret-key
DJANGO_ENV=prod
DJANGO_ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com,server-ip
```

### 5. Start Services
```bash
# Backend (use process manager like PM2 or systemd)
cd auto_garage
python manage.py runserver --settings=auto_garage_project.settings.prod

# Frontend (serve dist/ with Nginx/Apache)
# Point web server to frontend-vite/dist/
```

## ✅ Deployment Checklist
- [ ] Environment variables configured
- [ ] Database migrated
- [ ] Static files collected
- [ ] Frontend built for production
- [ ] CORS origins updated for production domain
- [ ] SSL certificate configured
- [ ] Process manager configured (PM2/systemd)
- [ ] Web server configured (Nginx/Apache)