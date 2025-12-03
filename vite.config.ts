import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // **التعديل الجديد:** تعيين المسار الأساسي ليتطابق مع اسم المستودع
  // هذا يضمن أن الموقع يعرف كيف يستدعي ملفات CSS و JS بشكل صحيح
  base: "/shamil-landing-page/", 
  plugins: [react()],
})
