import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',  // ⬅️ غيّر من '/shamil-landing-page/' إلى './'
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  publicDir: 'public'
})