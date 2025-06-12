import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: '/react-portfolio/',
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle: () => {
        // Copy index.html to 404.html for GitHub Pages SPA routing
        copyFileSync(
          resolve(__dirname, 'dist/index.html'),
          resolve(__dirname, 'dist/404.html')
        );
      },
    },
  ],
});
