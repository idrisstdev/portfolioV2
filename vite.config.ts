import { fileURLToPath, URL } from 'node:url'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

const plugins: PluginOption[] = [vue()]

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolioV2/',
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
