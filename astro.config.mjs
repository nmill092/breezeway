// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";

import svelte from "@astrojs/svelte";

const { ADOBE_ID } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
console.log({ ADOBE_ID })

export default defineConfig({
  site: "https://breezeway.nilemiller.dev/",
  trailingSlash: "always",
  
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Equateur",
      cssVariable: "--font-equateur",
      fallbacks: ["Georgia", "serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Equateur-Regular.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.fontsource(),
      name: "Manrope",
      cssVariable: "--font-manrope",
      fallbacks: ["system-ui", "sans-serif"]
    },
    {
      provider: fontProviders.fontsource(),
      name: "Homemade Apple",
      cssVariable: "--font-homemade-apple",
      fallbacks: ["cursive", "system-ui", "sans-serif"]
    },
    {
      provider: fontProviders.adobe({ id: ADOBE_ID }),
      name: "Nitti Typewriter Normal",
      cssVariable: "--font-nitti-typewriter",
      fallbacks: ["monospace"],
    },
  ],
  integrations: [svelte()],

  vite: {
    server: {
      allowedHosts: true,
    },
  },
});