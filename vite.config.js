import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import pkg from './package.json'

const removeDist = (path) => path.replace('dist/', '')
export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: new URL('src/index.js', import.meta.url).pathname,
      formats: ['es', 'umd'],
      name: pkg.name,
      fileName: (format) =>
        ({
          es: removeDist(pkg.module),
          umd: removeDist(pkg.main),
        }[format]),
    },
  },
})
