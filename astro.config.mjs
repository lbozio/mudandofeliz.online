import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import purgecss from "astro-purgecss";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://BrunoKrugel.github.io",
  base: "/rmktpzb",
  scripts: {
    "text/javascript": ["**/*.js"],
  },
  integrations: [react(), compress(), purgecss()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "entry.[hash].js",
          chunkFileNames: "chunks/chunk.[hash].js",
          assetFileNames: "assets/asset.[hash][extname]",
        },
      },
    },
  },
});
