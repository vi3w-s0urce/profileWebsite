import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    optimizeDeps: {
        exclude: ["@yoopta/headings"],
    },
    build: {
        outDir: 'public/build',
        chunkSizeWarningLimit: 3200,
    },
    define: {
        global: "window",
    },
    // server: {
    //     host: "0.0.0.0",
    //     port: 5173,
    //     // https: {
    //     //     key: fs.readFileSync(path.resolve(__dirname, "resources/ssl/localhost.key")),
    //     //     cert: fs.readFileSync(path.resolve(__dirname, "resources/ssl/localhost.crt")),
    //     // },
    //     hmr: {
    //         host: "192.168.14.65",
    //         // protocol: 'wss',
    //     },
    // },
    // base: "https://192.168.223.65:8000/",
});
