// @ts-check
import { defineConfig, fontProviders } from "astro/config";

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
      fallbacks: ["system-ui", "sans-serif"]
    },
    {
      provider: fontProviders.local(),
      name: "JMH Typewriter",
      cssVariable: "--font-jmh-typewriter",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JMH-Typewriter.regular.woff2"],
          },
        ],
      },
    },
  ],
});
