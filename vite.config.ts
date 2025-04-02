import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// Path to your src folder
const root = path.resolve(__dirname, "src");

export default defineConfig({
    plugins: [
        TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), ,
        react()
    ],
    resolve: {
        alias: {
            "@": root, // Map @ to ./src
        },
    },
});
