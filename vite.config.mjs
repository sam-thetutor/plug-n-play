import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    sourcemap: 'inline',
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'PlugNPlay',
      formats: ['es'],
      fileName: (format) => `plug-n-play.${format}.js`,
    },
    rollupOptions: {
      external: [
        '@dfinity/auth-client',
        '@dfinity/principal',
        '@dfinity/candid',
        '@dfinity/agent',
        '@dfinity/identity',
        '@dfinity/utils',
        '@astrox/sdk-web',
        '@astrox/sdk-webview'
      ],
      output: {
        format: 'es',
        exports: 'named'
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
      esmExternals: true
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    global: 'globalThis',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: [
      'js-sha256',
      '@astrox/sdk-web',
      '@astrox/sdk-webview'
    ],
    esbuildOptions: {
      target: 'es2020',
      format: 'esm',
      mainFields: ['module', 'main'],
      conditions: ['module', 'import', 'default']
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      compilerOptions: {
        declaration: true,
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'assets/*',
          dest: 'assets',
        },
      ],
    }),
    // viteCompression({
    //   verbose: true,
    //   disable: false,
    //   threshold: 1024,
    //   algorithm: 'brotliCompress',
    //   ext: '.br',
    //   compressionOptions: { level: 10 },
    //   deleteOriginFile: false
    // })
  ],
});
