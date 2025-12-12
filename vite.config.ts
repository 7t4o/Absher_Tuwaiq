import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
// Derive base from env so we can deploy to GitHub Pages (non-root) or Netlify (root).
// Set VITE_BASE_PATH=/Absher_Tuwaiq/ for GitHub Pages, leave undefined or "/" for Netlify/local.
export default defineConfig(({ mode }) => {
  const envBase = process.env.VITE_BASE_PATH;
  const base = envBase ?? (mode === 'production' ? '/' : '/');

  return {
    base,
    plugins: [
      react(),
      tailwindcss()
    ],
  };
});
