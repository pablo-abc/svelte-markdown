import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import analyze from 'rollup-plugin-analyzer'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'

const production = !process.argv.includes('--watch')
const removeDist = (p) => p.replace('dist/', '')

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    rollupOptions: {
      input: 'src/index.js',
      plugins: [
        production && terser(),
        production && analyze(),
        production && filesize(),
      ],
    },
    sourcemap: true,
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
