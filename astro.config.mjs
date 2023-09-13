import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import astroI18next from "astro-i18next";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), astroI18next()],
});
