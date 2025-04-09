import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Expose server to network
    port: 5173,  // You can keep the port as 5173 or change it
  },
})
