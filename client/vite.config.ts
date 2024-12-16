import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~app': path.resolve(__dirname, './src/app'),
      '~entities': path.resolve(__dirname, './src/entities'),
      '~features': path.resolve(__dirname, './src/features'),
      '~pages': path.resolve(__dirname, './src/pages'),
      '~widgets': path.resolve(__dirname, './src/widgets'),
      '~shared': path.resolve(__dirname, './src/shared'),
    },
  },
});
