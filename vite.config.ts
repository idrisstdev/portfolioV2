import { fileURLToPath, URL } from 'node:url'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const plugins: PluginOption[] = [vue()]

if (process.env.NODE_ENV === 'development') {
  plugins.push(vueDevTools())
}

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
