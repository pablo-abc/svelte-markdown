import analyze from 'rollup-plugin-analyzer'
import bundleSize from 'rollup-plugin-bundle-size'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      name: pkg.name,
    },
    {
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      name: pkg.name,
    },
  ],
  plugins: [
    svelte(),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve(),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
    production && analyze(),
    production && bundleSize(),
  ],
  watch: {
    clearScreen: false,
  },
}
