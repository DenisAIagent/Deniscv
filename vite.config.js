import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pas besoin de configurer css.postcss ici, car Vite utilisera
  // automatiquement votre fichier postcss.config.js s'il existe.
});
