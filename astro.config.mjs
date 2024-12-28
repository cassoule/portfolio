// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://milogourvest.netlify.app",
  integrations: [preact(), tailwind(), vue()]
});