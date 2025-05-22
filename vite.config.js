// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                tours: 'tours.html', // <-- Kök dizinde olduğu için sadece dosya adı
                detail: 'detail.html' // <-- Kök dizinde olduğu için sadece dosya adı
            }
        }
    }
});