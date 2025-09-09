import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia esta URL a la definitiva de producción
const SITE_URL = 'https://www.tudominio.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: { format: 'directory' },
});