import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const production = !process.argv.includes('--watch')
const removeDist = (p) => p.replace('dist/', '')

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
