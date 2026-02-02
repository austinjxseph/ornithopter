import { kirby } from "$lib/kirby";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  try {
    // Fetch project by slug from Kirby
    const project = await kirby.getProject(params.uid);

    return {
      project,
    };
  } catch (err) {
    // Project not found
    throw error(404, {
      message: "Project not found",
    });
  }
};
