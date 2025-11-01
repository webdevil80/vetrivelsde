import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vetri-portfolio/', // Replace <repository-name> with your repository name

});
