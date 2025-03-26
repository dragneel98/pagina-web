// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your configuration options here
  site: 'https://gonzalomina.dev',
  // Enable static site generation
  base: '/pagina-web',
  output: 'static',
});