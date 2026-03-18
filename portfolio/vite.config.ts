import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Using relative paths for root or subdir deployment
  build: {
    outDir: '../dist', // Output to a 'dist' folder in the root of the repository
    emptyOutDir: true, // safe to empty since it's a dedicated dist folder
    rollupOptions: {
      output: {
        // Ensuring assets are cleanly organized
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
})
