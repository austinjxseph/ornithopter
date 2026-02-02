import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Use Node adapter for Railway deployment
    adapter: adapter({
      // Options for the Node adapter
      out: "build",
      precompress: false,
      envPrefix: "",
    }),
  },
};

export default config;
