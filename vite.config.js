import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for proper routing in most deployment environments
  build: {
    outDir: 'dist', // Ensure the output directory is set to 'dist'
  },
});