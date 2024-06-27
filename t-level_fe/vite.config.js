import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        open: false, // Prevent Vite from opening a new browser window/tab
    },
});