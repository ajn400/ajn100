import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // 目前部署在gitpage上的生产环境路径
  base:'viteV3',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname
    }
  }
})
