import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["swiper/css/scrollbar", "swiper/css/parallax"],
    },
  },
});
