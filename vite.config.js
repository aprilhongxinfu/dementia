import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // Served as a GitHub Pages project site at https://aprilhongxinfu.github.io/dementia/
  base: '/dementia/',
})
