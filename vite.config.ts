import autoprefixer from 'autoprefixer';
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@state': path.resolve(__dirname, './src/state'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
