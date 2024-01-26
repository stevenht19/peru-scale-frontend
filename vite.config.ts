import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: "/src/pages",
      components: "/src/components",
      layouts: "/src/layouts",
      consts: "/src/consts",
      utils: "/src/utils",
      services: "/src/services",
      hooks: "/src/hooks",
      context: "/src/context",
    },
  }
})
