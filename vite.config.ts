import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // استخدام base ديناميكي حسب البيئة
  // للنشر على shamelapp.com: base = '/'
  // للنشر على GitHub Pages: base = '/shamil-landing-page/'
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  publicDir: 'public'
})