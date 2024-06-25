import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
    server: {
        host: '0.0.0.0',  // Mengizinkan akses dari IP mana saja
        port: 5173,  // Anda bisa menentukan port lain jika diperlukan
        hmr: {
            host: '192.168.237.65',  // Ganti dengan IP lokal Anda
        },
    },
    base: 'http://192.168.237.65:8000/',
});
