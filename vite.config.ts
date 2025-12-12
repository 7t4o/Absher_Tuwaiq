import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
// Use a custom base path for GitHub Pages in production so assets resolve correctly.
const base = process.env.NODE_ENV === 'production' ? '/Absher_Tuwaiq/' : '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss()
  ],
})
