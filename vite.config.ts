/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'aemVueCoreWcmComponentsBase',
      fileName: (format) => `aem-vue-3-core-wcm-components-base.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        '@adobe/aem-spa-page-model-manager',
        '@adobe/aem-spa-component-mapping',
        'aem-vue-3-editable-components',
        'dompurify',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          dompurify: 'DOMPurify',
          vue: 'Vue',
          'vue-router': 'VueRouter',
          '@adobe/aem-spa-page-model-manager': 'AemSpaPageModelManager',
          '@adobe/aem-spa-component-mapping': 'AemSpaComponentMapping',
          'aem-vue-3-editable-components': 'AemVueEditableComponents',
        },
        assetFileNames: 'aem-vue-3-core-wcm-components-base.[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});
