import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'index',
      fileName: 'index',
    },
  },
  server: {
    host: true,
    open: true,
  },
});
