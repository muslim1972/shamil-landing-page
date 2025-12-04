import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/shamil-landing-page/',  // أضف هذا السطر
  plugins: [react()],
  build: {
    outDir: 'docs',  // أضف هذا
    assetsDir: 'assets',  // أضف هذا
    copyPublicDir: true  // أضف هذا
  },
  publicDir: 'public'  // أضف هذا
})