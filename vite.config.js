const Path = require('path')
const vuePlugin = require('@vitejs/plugin-vue')
import sass from 'sass'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

const { defineConfig } = require('vite')

/**
 * https://vitejs.dev/config
 */
const config = defineConfig({
  root: Path.join(__dirname, 'src', 'renderer'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/renderer'),
    },
  },
  publicDir: 'public',
  server: {
    port: 8080,
  },
  open: false,
  build: {
    outDir: Path.join(__dirname, 'build', 'renderer'),
    emptyOutDir: true,
  },
  plugins: [
    vuePlugin(),
    AutoImport(
      /* options */
      {
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],

        // global imports to register
        imports: [
          // presets
          'vue',
          'vue-router',
          // custom
          {
            '@vueuse/core': [
              // named imports
              'useMouse', // import { useMouse } from '@vueuse/core',
              // alias
              ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
            ],
            axios: [
              // default imports
              ['default', 'axios'], // import { default as axios } from 'axios',
            ],
            '[package-name]': [
              '[import-names]',
              // alias
              ['[from]', '[alias]'],
            ],
          },
          // example type import
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true,
          },
        ],
        // Enable auto import by filename for default module exports under directories
        defaultExportByFilename: false,

        // Auto import for module exports under directories
        // by default it only scan one level of modules under the directory
        dirs: [
          // './hooks',
          // './composables' // only root modules
          // './composables/**', // all nested modules
          // ...
        ],

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: './auto-imports.d.ts',

        // Cache the result of resolving, across multiple vite builds.
        // A custom path is supported.
        // When set to `true`, the cache will be stored in `node_modules/.cache/unplugin-auto-import.json`.
        cache: false,

        // Auto import inside Vue template
        // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
        vueTemplate: false,

        // Custom resolvers, compatible with `unplugin-vue-components`
        // see https://github.com/antfu/unplugin-auto-import/pull/23/
        resolvers: [
          /* ... */
        ],

        // Inject the imports at the end of other imports
        injectAtEnd: true,

        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        // dts: true,
      },
    ),
    UnoCSS(),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
})

module.exports = config
