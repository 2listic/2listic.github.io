import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://dualistic.it",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        uil: ["*"], // Include all Unicons
      },
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: true // false to disable Astro dev toolbar
  }
});