import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    proxy: {
      "/api": {
        target: "https://port-0-check-daily-carbon-emissions-server-gw1g2alq2jw8x4.sel5.cloudtype.app",
        changeOrigin: true,
      },
    },
  },
});
