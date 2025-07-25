import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src", 
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/_mixins.scss" as *;`,
      },
    },
  },
});
