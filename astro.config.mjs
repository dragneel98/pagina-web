import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dragneel98.github.io',
  base: '/pagina-web/', // Asegúrate de que tenga la barra al final
  output: 'static',
});