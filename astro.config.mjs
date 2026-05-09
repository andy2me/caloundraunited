import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.caloundraunited.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
