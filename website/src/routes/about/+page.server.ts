import { kirby } from "$lib/kirby";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    // Fetch the about page from Kirby
    const page = await kirby.getPage("about");

    return {
      page,
    };
  } catch (err) {
    // Page not found
    throw error(404, {
      message: "About page not found",
    });
  }
};
