import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            chaiYellow: "#f4c542",
            chaiBrown: "#5c2e05",
            bgCream: "#fff8e7",
          },
        },
      },
    }),
  ],
});
