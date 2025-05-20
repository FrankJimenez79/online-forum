import { defineConfig } from "vite";

export default defineConfig({
  base: "/online-forum/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
