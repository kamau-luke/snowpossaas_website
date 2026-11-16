// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 5175 runs beside the UI (5174) and the API (4100).
  // host: true lets phones on the same Wi-Fi open the dev server.
  server: { port: 5175, host: true },
  vite: { plugins: [tailwindcss()] },
});
