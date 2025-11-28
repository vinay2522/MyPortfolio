# Vercel Deployment Guide

## Problem Fixed
The issue where clicking the deployed link downloads a file instead of showing the website has been fixed by configuring Vercel to properly serve the React SPA.

## Solution
Created `vercel.json` configuration file that:
1. Builds the project using `npm run build`
2. Serves static files from `dist/public`
3. Routes all requests to `index.html` for SPA routing

## Deployment Steps

### 1. Push the changes to GitHub
```bash
git add vercel.json
git commit -m "Add Vercel configuration for proper deployment"
git push origin main
```

### 2. Configure Vercel Project Settings

In your Vercel dashboard:

1. **Go to your project settings**
2. **Build & Development Settings:**
   - **Framework Preset:** Other
   - **Build Command:** `npm run build` (should auto-detect from vercel.json)
   - **Output Directory:** `dist/public` (should auto-detect from vercel.json)
   - **Install Command:** `npm install`

3. **Environment Variables:**
   - Add `DATABASE_URL` if you're using a database
   - Add `NODE_ENV=production`

### 3. Redeploy

After pushing the changes:
- Vercel will automatically detect the new `vercel.json` file
- It will rebuild and redeploy your project
- The website should now load correctly instead of downloading files

## How It Works

The `vercel.json` configuration:
- **buildCommand**: Runs `npm run build` to create the production build
- **outputDirectory**: Points to `dist/public` where Vite outputs the built files
- **rewrites**: Routes all requests to `index.html` so React Router (or Wouter) can handle client-side routing
- **headers**: Sets cache headers for static assets for better performance

## Troubleshooting

### If the site still doesn't work:

1. **Check Build Logs:**
   - Go to your Vercel dashboard
   - Check the deployment logs
   - Ensure the build completes successfully

2. **Verify Build Output:**
   - The build should create files in `dist/public/`
   - Check that `dist/public/index.html` exists

3. **Check Environment Variables:**
   - Make sure `DATABASE_URL` is set if needed
   - Verify `NODE_ENV` is set to `production`

4. **Clear Cache:**
   - In Vercel dashboard, go to Deployments
   - Click "Redeploy" with "Use existing Build Cache" unchecked

## Alternative: Static-Only Deployment

If you don't need the Express server on Vercel (just the frontend), you can:

1. Build locally: `npm run build`
2. Deploy only the `dist/public` folder
3. Or use Vercel's automatic detection for static sites

The current configuration works for both static-only and full-stack deployments.

