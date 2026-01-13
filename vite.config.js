import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/', // This is the default, but it's good to be explicit
  plugins: [
    tailwindcss(),
  ],
})
