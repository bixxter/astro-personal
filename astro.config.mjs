import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "url";

// https://astro.build/config
export default defineConfig({
  site: "https://bixter.com",
  base: "/astro-personal",
  integrations: [
    tailwind({
      configFile: fileURLToPath(
        new URL("./tailwind.config.mjs", import.meta.url),
      ),
    }),
  ],
});
