# Portfolio - Full-Stack Portfolio Website

A modern, full-stack portfolio website built with React, TypeScript, Express, and PostgreSQL.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Express, Vite
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Radix UI with Tailwind CSS
- **Responsive Design**: Mobile-first approach
- **Type Safety**: Full TypeScript coverage

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm** or **yarn**
- **PostgreSQL** (local or cloud instance like Neon, Supabase, etc.)

## 🛠️ Local Development Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# Server Configuration
PORT=5000
NODE_ENV=development
```

**For Cloud Databases (Neon, Supabase, etc.):**
```env
DATABASE_URL=postgresql://user:password@ep-xxx.region.neon.tech/dbname?sslmode=require
```

### 4. Database Setup

Push the database schema to your PostgreSQL database:

```bash
npm run db:push
```

This will create the necessary tables based on the schema defined in `shared/schema.ts`.

### 5. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🏗️ Building for Production

### 1. Build the Application

```bash
npm run build
```

This will:
- Build the React frontend using Vite
- Bundle the Express server using esbuild
- Output everything to the `dist` directory

### 2. Start Production Server

```bash
npm start
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio-app .
```

### Run Docker Container

```bash
docker run -p 5000:5000 \
  -e DATABASE_URL=postgresql://user:password@host:5432/dbname \
  -e NODE_ENV=production \
  -e PORT=5000 \
  portfolio-app
```

### Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/portfolio
      - NODE_ENV=production
      - PORT=5000
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=portfolio
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Run with:
```bash
docker-compose up -d
```

## ☁️ Cloud Deployment

### Vercel / Netlify / Railway

1. **Connect your repository** to your deployment platform
2. **Set environment variables**:
   - `DATABASE_URL`
   - `NODE_ENV=production`
   - `PORT=5000` (or use platform default)
3. **Build command**: `npm run build`
4. **Start command**: `npm start`

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `DATABASE_URL`: Your production PostgreSQL connection string
- `NODE_ENV`: Set to `production`
- `PORT`: Usually set automatically by the platform (default: 5000)

## 📁 Project Structure

```
Portfolio/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities and configurations
│   └── index.html
├── server/              # Express backend
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   └── storage.ts      # Database operations
├── shared/             # Shared code
│   └── schema.ts       # Database schema
├── script/             # Build scripts
└── dist/               # Production build output
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🗄️ Database Management

### Push Schema Changes

```bash
npm run db:push
```

### Generate Migrations

```bash
npm run db:generate
```

### Run Migrations

```bash
npm run db:migrate
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5000 is already in use, change the `PORT` environment variable:

```bash
PORT=3000 npm run dev
```

### Database Connection Issues

1. Verify your `DATABASE_URL` is correct
2. Ensure your database server is running
3. Check firewall settings if using a remote database
4. Verify SSL requirements for cloud databases

### Build Errors

1. Clear `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Clear build cache:
   ```bash
   rm -rf dist
   npm run build
   ```

## 📝 License

MIT

## 👤 Author

Vinay Naik V

---

For more information, visit the [project repository](https://github.com/yourusername/portfolio).

