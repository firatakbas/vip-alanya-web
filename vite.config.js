// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    publicDir: 'public',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html', // <-- Kök dizinde olduğu için sadece dosya adı
                tours: 'tours.html',
                cars: 'cars.html',
                transfert: 'transfert.html',
                rezervision: 'rezervision.html',
                detail: 'detail.html',
            }
        }
    }
});