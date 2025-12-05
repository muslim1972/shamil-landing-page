import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // تم تغيير المسار الأساسي ليتطابق مع اسم المستودع ليعمل المسار المطلق /images/... بشكل صحيح
  base: '/shamil-landing-page/',  
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  publicDir: 'public'
})