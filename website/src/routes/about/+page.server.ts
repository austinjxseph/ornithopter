import { createClient } from '$lib/prismicio';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
  const client = createClient({ fetch, cookies });

  try {
    // Fetch the about page by UID
    const page = await client.getByUID('page', 'about');

    return {
      page
    };
  } catch (err) {
    // Page not found
    throw error(404, {
      message: 'About page not found'
    });
  }
};
