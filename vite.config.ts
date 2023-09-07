import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: '../colleagues/public/js/tracker',
    rollupOptions: {
      output: {
        entryFileNames: `assets/loa_tracker.js`,
        chunkFileNames: `assets/loa_tracker.js`,
        assetFileNames: `assets/loa_tracker.[ext]`
      }
    }
  }
})
