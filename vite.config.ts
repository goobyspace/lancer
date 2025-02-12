import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://gooby.space/lancer/",
  resolve: {
    alias: {
      "@/pages": "/src/components/pages",
      "@": "/src",
    },
  },
});
