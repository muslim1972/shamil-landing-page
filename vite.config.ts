import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // للنشر على shamelapp.com: base = '/'
  // للنشر على GitHub Pages: base = '/shamil-landing-page/'
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  server: {
    port: 5174
  },
  publicDir: 'public'
})