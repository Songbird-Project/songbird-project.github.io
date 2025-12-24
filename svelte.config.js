import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: path.resolve('./src/routes/blog/blog-layout.svelte'),
    }),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(
      {
        pages: 'build',
        assets: 'build',
        fallback: undefined,
        precompress: false,
        strict: false,
        paths: {
          base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        }
      }
    )
  }
};

export default config;
