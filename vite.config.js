import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // Importe Tailwind
import autoprefixer from 'autoprefixer'; // Importe Autoprefixer

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,    // Dit à PostCSS d'utiliser Tailwind
        autoprefixer,   // Dit à PostCSS d'utiliser Autoprefixer
      ],
    },
  },
});
