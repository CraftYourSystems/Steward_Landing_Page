import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
  // Fix SPA routing: serve index.html for all routes in dev and preview
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
});
