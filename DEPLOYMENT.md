# Deployment Checklist

This document outlines what has been set up to make this project deployment-ready.

## ✅ Completed Setup

### 1. Build System
- ✅ Fixed `static.ts` to work with ES modules and CJS bundles
- ✅ Build process tested and working
- ✅ Production build creates optimized bundles

### 2. Environment Configuration
- ✅ Created `env.example` template file
- ✅ Updated `.gitignore` to exclude sensitive files
- ✅ Cross-platform script support (Windows/Linux/Mac)

### 3. Docker Support
- ✅ Multi-stage Dockerfile for optimized production images
- ✅ `.dockerignore` to exclude unnecessary files
- ✅ `docker-compose.yml` for easy local development with database

### 4. Documentation
- ✅ Comprehensive `README.md` with setup instructions
- ✅ `QUICKSTART.md` for quick setup guide
- ✅ Deployment instructions for various platforms

### 5. Package Management
- ✅ Added `cross-env` for cross-platform environment variables
- ✅ All dependencies properly configured
- ✅ Build scripts optimized

## 🚀 Deployment Options

### Option 1: Traditional VPS/Server

1. **SSH into your server**
2. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Set environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your production values
   ```
5. **Build the application**
   ```bash
   npm run build
   ```
6. **Set up database**
   ```bash
   npm run db:push
   ```
7. **Start the application**
   ```bash
   npm start
   ```

**Using PM2 for process management:**
```bash
npm install -g pm2
pm2 start dist/index.cjs --name portfolio
pm2 save
pm2 startup
```

### Option 2: Docker Deployment

1. **Build the image**
   ```bash
   docker build -t portfolio-app .
   ```

2. **Run the container**
   ```bash
   docker run -d \
     -p 5000:5000 \
     -e DATABASE_URL=your_database_url \
     -e NODE_ENV=production \
     --name portfolio \
     portfolio-app
   ```

3. **Or use Docker Compose**
   ```bash
   docker-compose up -d
   ```

### Option 3: Platform-as-a-Service

#### Vercel / Netlify / Railway

1. **Connect your repository**
2. **Set environment variables:**
   - `DATABASE_URL`
   - `NODE_ENV=production`
   - `PORT` (usually auto-set by platform)
3. **Build command:** `npm run build`
4. **Start command:** `npm start`

#### Heroku

1. **Install Heroku CLI**
2. **Create app**
   ```bash
   heroku create your-app-name
   ```
3. **Set environment variables**
   ```bash
   heroku config:set DATABASE_URL=your_database_url
   heroku config:set NODE_ENV=production
   ```
4. **Deploy**
   ```bash
   git push heroku main
   ```

#### Render

1. **Create new Web Service**
2. **Connect repository**
3. **Set environment variables**
4. **Build command:** `npm run build`
5. **Start command:** `npm start`

## 🔒 Security Checklist

Before deploying to production:

- [ ] Change default database credentials
- [ ] Use strong database passwords
- [ ] Enable SSL for database connections
- [ ] Set `NODE_ENV=production`
- [ ] Review and secure API endpoints
- [ ] Set up proper CORS policies if needed
- [ ] Configure rate limiting for API routes
- [ ] Set up proper logging and monitoring
- [ ] Use environment variables for all secrets
- [ ] Never commit `.env` files

## 📊 Monitoring & Maintenance

### Recommended Tools

- **Logging:** Consider using services like LogRocket, Sentry, or Datadog
- **Uptime Monitoring:** UptimeRobot, Pingdom, or StatusCake
- **Error Tracking:** Sentry, Rollbar, or Bugsnag
- **Performance:** New Relic, Datadog APM, or AppDynamics

### Health Checks

The application runs on the port specified by `PORT` environment variable (default: 5000).

You can add a health check endpoint in `server/routes.ts`:

```typescript
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
```

## 🔄 CI/CD Pipeline (Optional)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run check
      # Add your deployment steps here
```

## 📝 Post-Deployment

After deployment:

1. **Verify the application is running**
   - Check the homepage loads
   - Test API endpoints if any
   - Verify database connections

2. **Set up domain and SSL**
   - Configure DNS records
   - Set up SSL certificate (Let's Encrypt, Cloudflare, etc.)

3. **Monitor performance**
   - Set up monitoring tools
   - Check logs regularly
   - Monitor database performance

4. **Backup strategy**
   - Set up database backups
   - Document recovery procedures

## 🆘 Troubleshooting

### Application won't start
- Check environment variables are set correctly
- Verify database connection
- Check port is not already in use
- Review application logs

### Database connection errors
- Verify `DATABASE_URL` is correct
- Check database server is accessible
- Verify SSL requirements for cloud databases
- Check firewall settings

### Build failures
- Clear `node_modules` and `dist` folders
- Reinstall dependencies: `npm ci`
- Check Node.js version (requires 20+)
- Review build logs for specific errors

## 📞 Support

For issues or questions:
- Check the [README.md](./README.md)
- Review [QUICKSTART.md](./QUICKSTART.md)
- Check application logs
- Review error messages carefully

