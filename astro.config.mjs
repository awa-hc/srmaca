import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import jQuery from "jquery";



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
   // Configuración de Vite
  vite: {

    // Resolve alias para importar $ como jQuery
    resolve: {
      alias: {
        $: jQuery  
      }
    },

  },
});


