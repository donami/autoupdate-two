import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        assetsDir: '',
        rollupOptions: {
            input: './index.js',
            output: {
                dir: 'dist',
                inlineDynamicImports: true,
                entryFileNames: 'index.js',
                format: 'es',
            },
        },
    },
});