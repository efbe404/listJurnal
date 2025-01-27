import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jurnal/',
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
  template: {
                transformAssetUrls: {
                    includeAbsolute: false,
                },
            },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
