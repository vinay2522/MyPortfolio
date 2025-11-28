# Quick Start Guide

Get your portfolio up and running in minutes!

## Option 1: Local Development (Recommended for Development)

### Prerequisites
- Node.js 20+ installed
- PostgreSQL database (local or cloud)

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   
   Copy `env.example` to `.env`:
   ```bash
   # On Windows PowerShell
   Copy-Item env.example .env
   
   # On Linux/Mac
   cp env.example .env
   ```
   
   Edit `.env` and set your `DATABASE_URL`:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
   PORT=5000
   NODE_ENV=development
   ```

3. **Set up database**
   ```bash
   npm run db:push
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## Option 2: Docker (Recommended for Production-like Testing)

### Prerequisites
- Docker and Docker Compose installed

### Steps

1. **Start everything with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Set up database schema**
   ```bash
   # First, set DATABASE_URL in .env for the db:push command
   # Or run it inside the container:
   docker-compose exec app npm run db:push
   ```

3. **Access the application**
   Navigate to `http://localhost:5000`

4. **View logs**
   ```bash
   docker-compose logs -f app
   ```

5. **Stop everything**
   ```bash
   docker-compose down
   ```

## Option 3: Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set environment variables**
   ```env
   DATABASE_URL=your_production_database_url
   NODE_ENV=production
   PORT=5000
   ```

3. **Start production server**
   ```bash
   npm start
   ```

## Troubleshooting

### Database Connection Issues

If you're using a local PostgreSQL:
- Make sure PostgreSQL is running
- Check your connection string format: `postgresql://user:password@host:port/database`

If you're using a cloud database (Neon, Supabase, etc.):
- Make sure to include `?sslmode=require` in your connection string
- Example: `postgresql://user:pass@host/db?sslmode=require`

### Port Already in Use

Change the port in your `.env` file:
```env
PORT=3000
```

### Build Errors

Clear everything and rebuild:
```bash
rm -rf node_modules dist
npm install
npm run build
```

## Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Customize your portfolio in `client/src/pages/Portfolio.tsx`
- Add API routes in `server/routes.ts`
- Modify database schema in `shared/schema.ts`

