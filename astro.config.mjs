import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://BrunoKrugel.github.io",
  base: "/plr-page",
  scripts: {
    "text/javascript": ["**/*.js"],
  },
});
