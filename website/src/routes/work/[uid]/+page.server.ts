import { createClient } from '$lib/prismicio';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch, cookies }) => {
  const client = createClient({ fetch, cookies });

  try {
    // Fetch project by UID
    const project = await client.getByUID('project', params.uid);

    return {
      project
    };
  } catch (err) {
    // Project not found
    throw error(404, {
      message: 'Project not found'
    });
  }
};
