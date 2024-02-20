import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://bixter.com",
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
