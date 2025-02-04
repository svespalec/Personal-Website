import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'static',
  site: 'https://vespalec.com',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});