import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // تعيين المسار الأساسي (Base Path) كما فعلنا سابقاً
  base: "/shamil-landing-page/", 

  // **التعديل الجديد:** توجيه ناتج البناء إلى مجلد 'docs'
  build: {
    outDir: 'docs'
  },

  plugins: [react()],
})