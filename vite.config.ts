import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/faq_team_fe/',
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      helpers: '/src/helpers',
      pages: '/src/pages',
      assets: '/src/assets',
      styles: '/src/styles',
      const: '/src/const',
    },
  },
});
