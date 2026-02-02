import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    outDir: '../assets/js',
    emptyOutDir: false,
    lib: {
      entry: 'src/main.ts',
      name: 'components',
      fileName: () => 'components.js',
      formats: ['iife'],
    },
  },
});
