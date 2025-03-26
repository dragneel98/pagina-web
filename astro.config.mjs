import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your configuration options here
  site: 'https://gonzalomina.github.io',
  // Enable static site generation
  base: '/pagina-web',
  output: 'static',
});