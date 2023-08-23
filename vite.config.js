import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/task/",
  plugins: [react()],
  server: {
    proxy: {
      "/task": {
        target: "/task/index.html",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/task/, ""),
      },
    },
  },
});
