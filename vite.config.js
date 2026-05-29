import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        endodoncia: resolve(__dirname, 'endodoncia-zapopan/index.html'),
        dolorDental: resolve(__dirname, 'dolor-dental-zapopan/index.html'),
        clinicaDental: resolve(__dirname, 'clinica-dental-zapopan/index.html')
      }
    }
  }
})
