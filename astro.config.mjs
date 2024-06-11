import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	server: { port: 1337, host: true},
  integrations: [react(), tailwind()]
});
