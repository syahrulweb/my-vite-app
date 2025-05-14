import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/smk-wp/', // Ganti sesuai nama repo lo di GitHub
})
