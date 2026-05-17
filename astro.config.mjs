import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://zhiliu.ai",
  output: "static",
  build: {
    inlineStylesheets: "always",
    assets: "_assets",
  },
  compressHTML: true,
  server: {
    port: 4321,
  },
});
