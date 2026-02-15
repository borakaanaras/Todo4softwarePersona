import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Netlify root'tan yayınlıyor; base '/' olmalı. GitHub Pages kullanırsan '/RepoAdi/' yap.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
