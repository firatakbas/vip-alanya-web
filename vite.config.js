// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    publicDir: 'public',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                tours: 'tours.html', // <-- Kök dizinde olduğu için sadece dosya adı
                cars: 'cars.html', // <-- Kök dizinde olduğu için sadece dosya adı
                transfert: 'transfert.html', // <-- Kök dizinde olduğu için sadece dosya adı
                rezervision: 'rezervision.html' // <-- Kök dizinde olduğu için sadece dosya adı
            }
        }
    }
});