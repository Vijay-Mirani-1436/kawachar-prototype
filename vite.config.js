import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: false,
    host: true
  },
  preview: {
    port: 5173,
    host: true
  }
});
