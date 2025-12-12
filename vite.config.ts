import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
// Derive base from Vite mode so the production build targets GitHub Pages.
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/Absher_Tuwaiq/' : '/';

  return {
    base,
    plugins: [
      react(),
      tailwindcss()
    ],
  };
});
