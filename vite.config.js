import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/',
  server: {
    port: 5173,
    host: true,
    open: true
  },
  resolve: {
    alias: {
      '/images': resolve(__dirname, 'public/images')
    }
  }
})
