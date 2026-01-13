import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/lv3studios.github.io/', // This is the default, but it's good to be explicit
  plugins: [
    tailwindcss(),
  ],
})
