import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://mudandofeliz.online",
  scripts: {
    "text/javascript": ["**/*.js"]
  },
  integrations: [react(), purgecss()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "entry.[hash].js",
          chunkFileNames: "chunks/chunk.[hash].js",
          assetFileNames: "assets/asset.[hash][extname]"
        }
      }
    }
  }
});