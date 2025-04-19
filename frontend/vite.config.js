import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Bind to all available network interfaces
    port: 5174, // Optional: Set a specific port
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/pub': path.resolve(__dirname, './public')
    },
  },
});



